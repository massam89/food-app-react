import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.slide}>    
        <div className={styles.shape}></div>
      </div>
      
      <div className={styles.box}>
         <h2>Delicious Food, Delivered To You</h2>
          <p>Chosse your favorite meal from our broad selection of available meals and enjoy a delicius lunch or dinner at home.</p>
          <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
      
    </section>
  )
}

export default Hero