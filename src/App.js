import ReactDOM from "react-dom";
import CardModal from "./components/CardModal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Header />
      <main>
        <Hero />
        <Menu />
      </main>  
      { ReactDOM.createPortal(<CardModal />, document.getElementById('modal'))}
    </ContextProvider>
  );
}

export default App;
