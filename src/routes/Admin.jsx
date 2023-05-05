
import { NavLink, useParams } from 'react-router-dom';
import ProductForm from '../components/Form/ProductForm';
import NavBarAdmin from '../components/NavBar/NavBarAdmin';


const Admin = ()=> {

  let { id } = useParams();

  return (
    <div className="App">

      <div className='container'>
            <h2>Bienvenido Administrador!</h2>
          
            <div className='m-4'>
               <NavBarAdmin />
              
            </div>
      </div>

    </div>
  )
}


export default Admin