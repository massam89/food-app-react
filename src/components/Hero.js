import heroImg from '../img/hero.jpg'

const Hero = () => {
  return (
    <section>
      <img src={heroImg} alt="Hero image" />
      <div>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Chosse your favorite meal from our broad selection of available meals and enjoy a delicius lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>
    </section>
  )
}

export default Hero