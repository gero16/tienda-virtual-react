import { useContext, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logito.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { Context } from "../../context/context";
import Eliminar from "../../assets/eliminar.jpg"
import Principal from "../../assets/principal.jpg"
import Modificar from "../../assets/modificar.jpg"
import Crear from "../../assets/crear.jpg"

const NavBar = ({ isCategory, setIsCategory }) => {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getSession, session } = useContext(Context)

    useEffect(() => {
        getSession()
    }, [])
  
    return (
        <div className="row justify-content-center text-center">
            <div className="col-auto m-3">
                <ul className="d-flex flex-row fs-5">
                    <li className="p-2 flex-column" >
                        <NavLink to="/">
                            <div className="card"style= {{width: "18rem"}} >
                                <img className="card-img-top" src={Principal} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Página Principal </h5>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/add">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={Crear} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Agregar Productos</h5>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/delete">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={Eliminar} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Borrar Productos</h5>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/edit">
                            <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src={Modificar} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title"> Editar Productos</h5>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar