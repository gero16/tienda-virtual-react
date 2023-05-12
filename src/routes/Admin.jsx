
import NavBarAdmin from '../components/NavBar/NavBarAdmin';
import imagen from "../assets/fondo-admin2.jpg"

const Admin = ()=> {

  const adminHeader = {
    backgroundImage: `url(${imagen})`,
    height: "250px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }

  return (
      <> 
        <div style={adminHeader} className=' row justify-content-center align-items-center'>
          <div className="div-column text-center">
            <h1 className='titulo-admin'>Bienvenido Administrador!</h1>
          </div>
        </div>
          
        <div className='m-4'>
          <NavBarAdmin />    
        </div>
      </>
  )
}

export default Admin