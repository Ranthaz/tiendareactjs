import './App.css';
import Nav from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <header>
      <Nav/>
      </header>

      <ItemListContainer mensaje="Bienvenido a la tienda"/>

    </div>
  );
}

export default App;