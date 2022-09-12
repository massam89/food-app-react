import styles from './CardModal.module.css'

const CardModal = () => {
  return (
    <div className={styles.cardModal} style={{ 'display': 'block' }}>

      <div className={styles.transparent}>sdf</div>

      <div className={styles.CardModalInner}>
        <ul>
          <li>
            <div>
              <h3>Sushi</h3>
              <span>$22.99</span> <span>x 3</span>
            </div>
            <div>
              <button>−</button>
              <button>+</button>
            </div>
          </li>

          <li>
            <div>
              <h3>Sushi</h3>
              <span>$22.99</span> <span>x 3</span>
            </div>
            <div>
              <button>−</button>
              <button>+</button>
            </div>
          </li>
        </ul>

        <div className={styles.totalAmount}>
          <span>Total Amount</span>
          <span>$100</span>
        </div>
       
       <div className={styles.closeOrder}>
        <button>Close</button>
        <button>Order</button>
       </div>
        
      </div>

      
    
    </div>
  )
}

export default CardModal