import Item from "./Item"
import styles from './Menu.module.css'

const menu = [
  {
    id: 1,
    name: 'Sushi',
    ingredients: 'Finest fish and veggies',
    price: '22.99',
    amount: 1
  },
  {
    id: 2,
    name: 'Schnitzel',
    ingredients: 'A german specialty!',
    price: '16.50',
    amount: 1
  },
  {
    id: 3,
    name: 'Barbecue Burger',
    ingredients: 'American, raw, meaty',
    price: '12.99',
    amount: 1
  },
  {
    id: 4,
    name: 'Grenn Bowl',
    ingredients: 'Healthy...and green...',
    price: '18.99',
    amount: 1
  }
]

const Menu = () => {

  return (
    <section className={styles.menu}>
      <ul>
        { menu.map((item) => <Item item={item} key={item.id} />) }
      </ul>
    </section>
  )
}

export default Menu