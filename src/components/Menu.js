import { useCallback, useEffect, useState, useContext } from "react"
import Item from "./Item"
import styles from './Menu.module.css'
import { Context } from "../context/ContextProvider"

const Menu = () => {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const ctx = useContext(Context)

  const getMeals = useCallback(async() => {
    try{
      setError(false)
      setIsLoading(true)
      const response = await fetch('https://react-http-850ff-default-rtdb.firebaseio.com/meals.json')
      const data = await response.json()

      const myMeals = []
    
      Object.keys(data).forEach(function(key, index) {
        myMeals.push({
          id: index,
          name: data[key].name,
          ingredients: data[key].description,
          price: data[key].price
        })
      });

      setMeals(myMeals)
      setIsLoading(false)
      ctx.addMeals(myMeals)
    } catch {
      setIsLoading(false)
      setError(true)
    }    
  }, [])

  useEffect(() => {
    getMeals()
  }, [getMeals])

  return (
    <section className={styles.menu}>
      <ul>
        {isLoading && <p>Menu List Is Loading ...</p>}
        {error && <p>Connection failed. Turn on your VPN<button onClick={getMeals}>Refresh Connection</button></p>}
        {meals.map((item, index) => <Item item={item} key={index} />)}
      </ul>
    </section>
  )
}

export default Menu