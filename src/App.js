import CardModal from "./components/CardModal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>  
      <CardModal />
    </>
  );
}

export default App;
