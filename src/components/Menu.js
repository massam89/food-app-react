import Item from "./Item"
import styles from './Menu.module.css'
import { items } from "../database/items"

const Menu = () => {

  return (
    <section className={styles.menu}>
      <ul>
        { items.map((item) => <Item item={item} key={item.id} />) }
      </ul>
    </section>
  )
}

export default Menu