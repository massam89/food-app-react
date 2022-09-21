import { useContext, useEffect, useState } from 'react'
import { Context } from '../context/ContextProvider'

import styles from './CardModal.module.css'
import Form from './Form'

const CardModal = () => {
  const {cardState, onDisplay, addToCard, removeFromCard, clearCard, addMeals} = useContext(Context)
  const [didOrder, setDidOrder] = useState(false)
  const [didConfirm, setDidConfirm] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {   
      window.scrollTo(0, window.pageYOffset - 5)
      if(window.pageYOffset === 0) {
        clearInterval(interval)
      }
    }, 1)
  }, [])

  const onButtonHandler = (e) => {
    e.preventDefault()

    switch(e.target.innerText){  
      case '+':
        addToCard({id: +e.target.getAttribute('data-id'), amount: 1})
        break
      case '−':
        removeFromCard(+e.target.getAttribute('data-id'))
        break
      default:
        return
    }
  }

  const onOrderHandler = () => {
    setDidOrder(true)
  }

  const onConfirmHandler = (formData) => {
    setDidConfirm(true)

    fetch('https://react-http-850ff-default-rtdb.firebaseio.com/order.json', {
      method: 'POST', 
      body: JSON.stringify({
        user: formData,
        card: cardState.card
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsSuccess(true)
      clearCard()
    })
    .catch(error => console.log(error))

  }

  return (
    <div className={styles.cardModal}>

      <div onClick={onDisplay} className={styles.transparent}></div>

      <div className={styles.CardModalInner}>

        {!didConfirm && 
        <>
          <ul>
          {cardState.card.map((item, index) => (
            <li key={index}>
            <div>
              <h3>{item.name}</h3>
              <span>${item.price}</span> <span>x {item.amount}</span>
            </div>
            <div>
              <button data-id={item.id} onClick={onButtonHandler}>−</button>
              <button data-id={item.id} onClick={onButtonHandler}>+</button>
            </div>
            </li>
          ))}
          </ul>

          <div className={styles.totalAmount}>
            <span>Total Amount</span>
            <span>${cardState.totalAmount.toFixed(2)}</span>
          </div>
        
          {!didOrder && <div className={styles.closeOrder}>
            <button onClick={onDisplay}>Close</button>
            {cardState.card.length !== 0 && <button onClick={onOrderHandler}>Order</button>}
          </div>}
          
          {didOrder && <Form onCancel={onDisplay} onConfirm={onConfirmHandler} />}
        </>
        }
        
        {didConfirm && !isSuccess && <p>Sending data...</p>}
        {isSuccess && <p>Data was sent successfuly</p>}
      
      </div>
    </div>
  )
}

export default CardModal