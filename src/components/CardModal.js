import { useContext, useEffect } from 'react'
import { Context } from '../context/ContextProvider'

import styles from './CardModal.module.css'

const CardModal = () => {
  const {cardState, onDisplay, addToCard} = useContext(Context)

  useEffect(() => {
    const interval = setInterval(() => {   
      window.scrollTo(0, window.pageYOffset - 5)
      if(window.pageYOffset == 0) {
        clearInterval(interval)
      }
    }, 1)
  }, [])

  const oneButtonHandler = (e) => {
    e.preventDefault()
    
    switch(e.target.innerText){
      
      case '+':
        addToCard({id: +e.target.getAttribute('data-id'), value: 1})
        break
      case '−':
        addToCard({id: +e.target.getAttribute('data-id'), value: -1})
        break
      default:
        return
    }
  }

  return (
    <div className={styles.cardModal}>

      <div onClick={onDisplay} className={styles.transparent}></div>

      <div className={styles.CardModalInner}>
        <ul>
          {cardState.card.map(item => (
            <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <span>${item.price}</span> <span>x {item.amount}</span>
            </div>
            <div>
              <button data-id={item.id} onClick={oneButtonHandler}>−</button>
              <button data-id={item.id} onClick={oneButtonHandler}>+</button>
            </div>
            </li>
          ))}
        </ul>

        <div className={styles.totalAmount}>
          <span>Total Amount</span>
          <span>${cardState.totalAmount.toFixed(2)}</span>
        </div>
       
       <div className={styles.closeOrder}>
        <button onClick={onDisplay}>Close</button>
        <button onClick={() => console.log('ordering...')}>Order</button>
       </div>
        
      </div>

      
    
    </div>
  )
}

export default CardModal