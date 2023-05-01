import { Link, useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"


const ErrorPage = ()=> {

  const error = useRouteError()
   
  return (
    <main className="container text-center">
 
      <img src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000" className="error-img" alt="" />
      <h1> { error.statusText || error.message  } </h1>

      <Link to="/">
        <p className="mt-3">
          <button className="btn btn-outline-primary"> Volver a la Página Principal </button>
        </p>
      </Link>

    </main>
  )
}


export default ErrorPage