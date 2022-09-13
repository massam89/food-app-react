import { useRef, useContext, useState } from 'react'
import { Context } from '../context/ContextProvider'
import styles from './Item.module.css'

const Item = (props) => {
  const [error, setError] = useState(false)
  const input = useRef()
  const {addToCard} = useContext(Context)

  const onClickHandler = () => {
    if(input.current.value && input.current.value > 0){
      setError(false)
      addToCard({value:input.current.value, id: input.current.id});
      input.current.value = ''
    } else {
      setError(true)
    }
  }

  return (
    <li className={styles.item}>
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.ingredients}</p>
        <span>${props.item.price}</span>
      </div>
      <div>
        <label htmlFor={`${props.item.id}`}>Amount</label>
        <input className={error ? styles.error : ''} ref={input} type='number' id={`${props.item.id}`}/>
        <button onClick={onClickHandler}>+ Add</button>
      </div>
    </li>
  )
}

export default Item