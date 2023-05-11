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
                <ul className="d-flex flex-row fs-5 lista-admin-menu">
                    <li className="p-2 flex-column" >
                        <NavLink to="/">
                            <span className="h4">  Volver al Inicio </span>     
                        </NavLink>
                        <picture>
                            <img src={Principal} alt="" className="img-menu-admin"/>
                        </picture>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/add/" >
                            <span className="h4"> Crear Producto </span>     
                        </NavLink>
                            <picture>
                                <img src={Crear} alt="" className="img-menu-admin"/>
                            </picture>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/delete">
                        <span className="h4">  Borrar Productos </span>     
                        </NavLink>
                            <picture>
                                <img src={Eliminar} alt="" className="img-menu-admin"/>
                            </picture>
                    </li>
                    <li className="p-2 flex-column">
                        <NavLink to="/items/edit">
                            <span className="h4">  Editar Productos </span>     
                        </NavLink>
                            <picture>
                                <img src={Modificar} alt="" className="img-menu-admin"/>
                            </picture>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar