import { useParams } from "react-router-dom";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { Context } from "../../context/context";
import { useContext, useEffect } from "react";


const Delete = () => {
    let { id } = useParams();
    const { getProduct, product } = useContext(Context)

    useEffect(() => {
        getProduct(id)
        console.log(product)
    }, [])

    
    const deleteElement = async () => {
        const db = getFirestore()
        try {
            
            await deleteDoc(doc(db, "items", id));
        } catch (error) {
            console.log(error)
        }
    }

    console.log(id)
    return (
      <>
        <h1>Esta seguro que desea eliminar el Item: </h1>
        <div className="d-flex align-items-center">
            <h4> {product.nombre }</h4>
            <picture>
                <img src={product.img} class="img-fluid img-thumbnail" alt="..." />
            </picture>
        </div>
        <button type="button" class="btn btn-danger" onClick={() => deleteElement()}>Eliminar</button>
      </>
    )
}

export default Delete