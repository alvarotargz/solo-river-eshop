import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css'
import './components/CartWidget/CartWidget.css'
import './components/ItemListContainer/ItemListContainer.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  );
}

export default App;
