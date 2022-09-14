import { useContext, useEffect, useState } from 'react';
import { Context } from '../context/ContextProvider';
import styles from './Card.module.css'

const Card = () => {
  const {cardState, onDisplay} = useContext(Context);
  const [trans, setTrans] = useState(false)

  useEffect(() => {
    setTrans(true)
    const timer = setTimeout(() => {
      setTrans(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [cardState.card])

  return (
    <div onClick={onDisplay} className={`${styles.card} ${trans ? styles.transition: ''}`}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Your Card</span>
      <span>{cardState.card.length}</span>
    </div>
  )
}

export default Card