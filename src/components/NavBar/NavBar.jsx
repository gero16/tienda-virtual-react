import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logito.jpg"
import { NavLink } from "react-router-dom"
import { useState } from "react";


const NavBar = ({ isCategory, setIsCategory }) => {
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <nav className="d-flex justify-content-between align-items-center">
            
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
   
            <ul className="d-flex flex-row">
                <li className="p-2">
                    <NavLink to="/categories/celulares">
                        Celulares
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/categories/notebooks">
                      Notebooks
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/categories/PC">
                    PCs
                    </NavLink>
                </li>
                 <li className="p-2">
                    <NavLink to="/categories/tablets">
                     Tablets
                    </NavLink>
                </li>
                <li>
                    <CartWidget show={ show } handleClose={ handleClose } handleShow={ handleShow }/>
                </li>
            </ul>

        </nav>
    )
}

export default NavBar