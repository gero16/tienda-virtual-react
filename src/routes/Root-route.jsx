
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import Cart from '../components/Cart/Cart';

const App = ()=> {

  return (
    <div className="App">

      <div className='container'>
        <ItemListContainer greeting={"¡Bienvenido a Mercadito!"}  />
      </div>
      
    </div>
  )
}


export default App