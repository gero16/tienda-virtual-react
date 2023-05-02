
import { NavLink, useParams } from 'react-router-dom';
import ProductForm from '../components/Form/ProductForm';


const Admin = ()=> {

  let { id } = useParams();

  return (
    <div className="App">

      <div className='container'>
            <h2>Bienvenido Administrador!</h2>
          
            <div className='m-4'>
              <h3 className='mb-3'> Agregar un Nuevo Producto </h3>
               <ProductForm />
            </div>
      </div>

    </div>
  )
}


export default Admin