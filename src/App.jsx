import './App.css';
import ItemListContainer from './components/ItemListCantainer/ItemListContainer';
import NavBar from "./components/NavBar/NavBar";



function App() {  
  return (

    <>
      <NavBar/>
      <ItemListContainer mensaje={"Nuestras Propuestas"}/>

    </>

  );
};

export default App
