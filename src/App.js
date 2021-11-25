import './App.css';
import Nav from './components/nav/navBar';
import ItemListContainer from './components/itemlistcont/ItemListContainer';





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
