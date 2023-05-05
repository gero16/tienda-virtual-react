import { useContext, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logito.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { Context } from "../../context/context";


const NavBar = ({ isCategory, setIsCategory }) => {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getSession, session } = useContext(Context)

    useEffect(() => {
        getSession()
    }, [])
  
    return (
        <nav className="d-flex justify-content-between">
            
            <ul className="d-flex flex-row fs-5">
                <li className="p-2">
                    <NavLink to="/">
                        Volver al Inicio
                    </NavLink>
                </li>
                 <li className="p-2">
                    <NavLink to="/items/add/">
                        Agregar Producto
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/items/delete">
                        Borrar Productos
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/items/edit">
                        Editar Productos
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar