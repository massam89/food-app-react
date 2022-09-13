import { useContext } from 'react'
import { Context } from '../context/ContextProvider'

import styles from './CardModal.module.css'

const CardModal = () => {
  const {cardState, onDisplay} = useContext(Context)

  return (
    <div className={styles.cardModal}>

      <div onClick={onDisplay} className={styles.transparent}>sdf</div>

      <div className={styles.CardModalInner}>
        <ul>
          {cardState.card.map(item => (
            <li key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <span>${item.price}</span> <span>x {item.amount}</span>
            </div>
            <div>
              <button>−</button>
              <button>+</button>
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