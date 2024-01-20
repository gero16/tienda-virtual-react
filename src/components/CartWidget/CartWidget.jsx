import carrito from "../../assets/carrito-de-compras.png"
import { useContext } from "react"
import { Context } from "../../context/context"
import Cart from "../Cart/Cart"

const CartWidget = ({ handleClose, show, handleShow }) => {

    const { productsAdded } = useContext(Context)
    
    return (

        <>
            <div className="d-flex" onClick={ handleShow }>
                <img src={ carrito } alt="Imagen del Carrito de Compras" className='carrito-logo '></img>
                <div>
                    <span className="contador-productos"> { productsAdded.length } </span>
                </div>
            </div>

            <Cart handleClose={ handleClose } show={ show } productsAdded={productsAdded}  /> 
        </>
    )
}

export default CartWidget