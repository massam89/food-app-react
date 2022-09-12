import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Your Card</span>
      <span>5</span>
    </div>
  )
}

export default Card