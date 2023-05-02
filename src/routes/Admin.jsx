
import { NavLink, useParams } from 'react-router-dom';


const Admin = ()=> {

  let { id } = useParams();

  return (
    <div className="App">

      <div className='container'>
            <h2>Bienvenido Administrador!</h2>
      </div>

    </div>
  )
}


export default Admin