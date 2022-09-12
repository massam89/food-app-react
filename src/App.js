import { useContext } from "react";
import ReactDOM from "react-dom";
import CardModal from "./components/CardModal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import { Context } from "./context/ContextProvider";


function App() {

  const {cardState} = useContext(Context)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>  
      {cardState.showCard && ReactDOM.createPortal(<CardModal />, document.getElementById('modal'))}
    </>
  );
}

export default App;
