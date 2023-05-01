import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import ItemDetail from "../ItemDetail/ItemDetail"


const Cart = ({ productsAdded, show, handleClose })=> {
    
    return (
        <>
            <Modal show={ show } onHide={ handleClose } >

                <Modal.Header closeButton>
                    <Modal.Title> Carrito de Compras </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="text-dark bg-light m-3">
                        {
                            productsAdded && productsAdded.length >= 1 ?
                                productsAdded.map((product, index) => {
                                    return <ItemDetail product={ product } key={ product.id }/> 
                                })
                                : <div className="card text-center p-2"> No hay ningun producto en su Carrito!</div> 
                        }
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }> Cancelar </Button>
                    <Link to="/cart">
                        <Button variant="success" onClick={ handleClose }> Carrito Completo </Button>
                    </Link>
                    <Link to="/checkout">
                        <Button variant="primary" onClick={ handleClose }> Finalizar Compra </Button>
                    </Link>
                </Modal.Footer>

            </Modal>
    
        </>
    )
  }
  
  
  export default Cart