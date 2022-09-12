import styles from './Item.module.css'

const Item = (props) => {
  return (
    <li className={styles.item}>
      <div>
        <h3>{props.item.name}</h3>
        <p>{props.item.ingredients}</p>
        <span>${props.item.price}</span>
      </div>
      <div>
        <label htmlFor={`${props.item.id}`}>Amount</label>
        <input type='number' id={`${props.item.id}`}/>
        <button>+ Add</button>
      </div>
    </li>
  )
}

export default Item