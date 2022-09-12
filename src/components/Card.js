import { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import styles from './Card.module.css'

const Card = () => {
  const {onDisplay} = useContext(Context);

  return (
    <div onClick={onDisplay} className={styles.card}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Your Card</span>
      <span>5</span>
    </div>
  )
}

export default Card