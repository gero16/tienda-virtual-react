import { useContext, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { Context } from "../../context/context";


const NavBar = () => {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { getSession, session } = useContext(Context)

    useEffect(() => {
        getSession()
    }, [])
  
    return (
        <nav className="d-flex justify-content-between align-items-center navbar navbar-dark bg-dark">
            
            <header className="container"> 

                <NavLink to="/">
                    <img src={logo} alt=""  className="logo"/>
                </NavLink>
    
                <ul className="d-flex flex-row navbar-nav">
                    <li className="p-2">
                        <NavLink to="/categories/celulares" className="navbar-nav nav-link">
                            Celulares
                        </NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to="/categories/notebooks" className="navbar-nav nav-link">
                            Notebooks
                        </NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to="/categories/PC" className="navbar-nav nav-link">
                            PCs
                        </NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to="/categories/tablets" className="navbar-nav nav-link">
                            Tablets
                        </NavLink>
                    </li>
                    { session 
                        ? <li className="p-2"> <NavLink to="/admin" className="navbar-nav nav-link"> Administrar </NavLink> </li> 
                        : <li className="p-2"> <NavLink to="/auth" className="navbar-nav nav-link"> Iniciar Sesión </NavLink> </li> 
                    }
                    <li className="p-2">
                        <CartWidget show={ show } handleClose={ handleClose } handleShow={ handleShow }/>
                    </li>
                </ul>
            </header>

        </nav>
    )
}
//  session ?  <li className="p-2"> <NavLink to="/admin" /> Admin </li> : <li className="p-2"> <NavLink to="/auth" /> Iniciar Sesión </li>
export default NavBar