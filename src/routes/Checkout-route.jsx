import { useContext } from "react"
import ItemDetail from "../components/ItemDetail/ItemDetail"

import { Context } from "../context/context"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import ClientForm from "../components/Form/ClientForm"

const Checkout = ( { products } ) => {

    const { productsAdded } = useContext(Context) 

    const sendOrder = (ord) => {
        const total = productsAdded.reduce(
            (acc, product) => acc + product.quantity * product.precio,
            0
        )
        const order = {
            buyer: {
                name: ord.nombre,
                email: ord.correo,
                phone: ord.telefono,
                direccion: ord.direccion,
            },
            items: productsAdded,
            total: total,
        }
        console.log(order)
        const db = getFirestore()
        const collectionRef = collection(db, "orders")

        addDoc(collectionRef, order)
            .then((response) => console.log({ response }) )
            .catch((error) => console.log({ error }))
    }

    return (
        <>
            <div className="container">

                <div className="row p-5">
                    <div className="col-6">
                        <ClientForm sendOrder={ sendOrder } /> 
                    </div>
                    
                    <div className="col-6">
                            <h2 className="ms-3 text-secondary"> Resumen del Pedido  </h2>
                            <div className="card text-dark bg-light m-4 p-3 ">
                                {
                                    productsAdded.length >= 1 ? 
                                        productsAdded.map((product, index) => {
                                            return (
                                            <>
                                                <ItemDetail product={ product } /> 
                                            </>
                                            )
                                        })
                                        
                                     : <div className="text-center"> No hay Productos en su Carrito </div>
                                }
                                  <div className="p-2">
                                        <p> Envio: Gratis </p>
                                        <h4> Total 
                                            <strong> USD 
                                                { productsAdded.reduce(
                                                    (acc, product) => acc + product.quantity * product.precio,
                                                    0)
                                                } 
                                            </strong>
                                        </h4>
                                    </div>
                            </div>
                    </div>
                </div>
   
            </div>
        </>
    )
}

export default Checkout