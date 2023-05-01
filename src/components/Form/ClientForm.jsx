import { useState } from "react"
import { NavLink } from "react-router-dom"

const ClientForm = ({ sendOrder })=> {

    const [order, setOrder] = useState({
        nombre:[],
        correo: [],
        telefono: [],
        direccion: [],
      })

    return(
        <>
            <h2 className="text-secondary"> Detalles del Cliente </h2>
                <form className="mt-3"> 
                    <div className="mb-3">
                        <label className="form-label"> Nombre </label>
                        <input 
                            type="text" 
                            className="form-control"  
                            aria-describedby="emailHelp"
                            name="nombre" 
                            onChange={(e) => setOrder({ ...state, nombre: e.target.value })}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Correo </label>
                        <input 
                            type="email" 
                            className="form-control"
                            name="correo"  
                            onChange={(e) => setOrder({ ...state, correo: e.target.value })}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Telefono de contacto </label>
                        <input 
                            type="tel" 
                            className="form-control"
                            name="telefono"    
                            onChange={(e) => setOrder({ ...state, telefono: e.target.value })}
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Dirección </label>
                        <input 
                            type="text" 
                            className="form-control"  
                            name="direccion"
                            onChange={(e) => setOrder({ ...state, direccion: e.target.value })}
                            />
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <NavLink to="/">
                                <button type="submit" className="btn btn-primary p-3"> Volver </button>
                            </NavLink>
                        </div>
                        <div className="col-6 text-center">
                            <button 
                                type="button" 
                                className="btn btn-success p-3" 
                                onClick={() => sendOrder(order) } > Pagar 
                            </button>
                        </div>
                    </div>
            </form>
        </>
    )
}


export default ClientForm