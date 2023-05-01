

import NavBar from '../components/NavBar/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { NavLink, useParams } from 'react-router-dom';


const Item = ()=> {

  let { id } = useParams();

  return (
    <div className="App">

      <div className='container'>
        <ItemDetailContainer productID={ id }/> 
      </div>

    </div>
  )
}


export default Item