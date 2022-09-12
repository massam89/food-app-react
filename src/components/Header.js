import { useContext } from "react"
import { Context } from "../context/ContextProvider"
import Card from "./Card"
import styles from './Header.module.css'

const Header = () => {

  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <Card />
    </header>
  )
}

export default Header