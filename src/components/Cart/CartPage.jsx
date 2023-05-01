import { useContext } from "react"
import { Context } from "../../context/context"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import ItemDetail from "../ItemDetail/ItemDetail"

const CartPage = () => {
    const { productsAdded } = useContext(Context)
    
    return (
        <>
            <div className="card text-dark bg-light m-3">
                {
                    productsAdded && productsAdded.length >= 1 ?
                        productsAdded.map((product, index) => {
                            return <ItemDetail product={ product } key={ product.id } descripcion={true}/> 
                        })
                        : <div className="text-center p-2"> No hay ningun producto en su Carrito!</div> 
                }
            </div>
            <div className="m-3">
                <span>SubTotal: </span>
                <strong> 
                    <span>USD </span>
                    {
                     productsAdded.reduce(
                            (acc, product) => acc + product.quantity * product.precio,
                            0)
                        
                     }
                </strong>
            </div>
            <div className="d-flex justify-content-evenly m-3">
                <Link to="/">
                    <Button variant="secondary"> Volver a la Página Principal </Button>
                </Link>
                <Link to="/checkout">
                    <Button variant="primary"> Finalizar Compra </Button>
                </Link>
            </div>

        </>
    )
}


export default CartPage;