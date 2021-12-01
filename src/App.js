import './App.css';
import Nav from './components/Nav/NavBar';
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