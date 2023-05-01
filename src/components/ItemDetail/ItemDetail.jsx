import { useContext, useState } from "react"
import { Context } from "../../context/context"
import ItemCount from "../ItemCount/ItemCount"
import { ThreeDots  } from  'react-loader-spinner'
import ItemInfo from "./ItemInfo"
import Loader from "../Loader/Loader"

const ItemDetail = ({ product, descripcion, detalle}) => {
    const { onAdd } = useContext(Context)

    const [ added, setAdded ] = useState(0)

    const onAddProduct = (count) => {
        setAdded(count)
        onAdd(product, count)
        //product.quantity = count
        //const item = localStorage.setItem('product', JSON.stringify(product));
    }

    console.log(product)
  
    return (
        <div className="mb-4">
            { product.length === 0 
                ? <Loader />
                : <div className="card" key={ product.id }>
                        <div className="row g-0">

                            <div className={`${ detalle ? "col-md-6" : "col-md-4" } `}>
                                <img src={ product.img } className="img-fluid rounded-start" alt="..." /> 
                            </div>

                            <div className={`${ detalle ? "col-md-6" : "col-md-8" } `} >
                                <div className="card-body">
                                    <h4 className="card-title"> { product.nombre } </h4>
                                    <p className="card-text"> { descripcion ? product.descripcion :  " "} </p>
                                    <h5 className="card-text "> <small className=" text-danger"> USD { product.precio } </small> </h5>
                                    <p className="card-text fs-5"> <small className="text-muted"> Cantidad: { product.quantity } </small> </p>
                                    
                                    {
                                        detalle 
                                        ? <div className="datos-adicionales">
                                                <ul className="mt-2">
                                                    <li className="fs-6">
                                                        <strong className=""> Estado: </strong>
                                                        <span> { product.estado } </span>
                                                    </li>
                                                    <li className="fs-6">
                                                        <strong> Garantia: </strong>
                                                        <span> { product.garantia } </span>
                                                    </li>
                                                    <li className="fs-6">
                                                        <strong> Disponible: </strong>
                                                        <span className={product.stock < 1 ? "text-danger" : "text-primary"}> { product.stock ? "Hay Stock" : "Agotado" } </span>
                                                    </li>
                                                    <li className="fs-6">
                                                        <ItemCount stock={ product.stock } onAdd={ onAddProduct } product={product}> </ItemCount>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            : " "
                                        }
                                </div>
                            </div>

                        </div>
                        {
                            detalle ? <ItemInfo product={ product } /> : ""
                        }
                
                </div>
            }
        </div>
    )          
}


export default ItemDetail