import { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import styles from './Card.module.css'

const Card = () => {
  const {cardState, onDisplay} = useContext(Context);

  return (
    <div onClick={onDisplay} className={styles.card}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Your Card</span>
      <span>{cardState.card.length}</span>
    </div>
  )
}

export default Card