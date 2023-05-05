import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ProductFormEdit from "../Form/ProductFormEdit"
import ProductForm from "../Form/ProductForm"

const ProductForm = ({productSelected}) => {
    const [edit, setEdit] = useState(false)
    let location = useLocation();

    useEffect(() => {
        // No me queda claro porque tengo que usar un useEffect
        if(location.pathname == "/items/edit") {
            setEdit(true)
        }
    }, [])

    const [product, setProduct] = useState({
        nombre:[],
        categoria:[],
        color:[],
        marca:[],
        grafica:[],
        procesador:[],
        ram:[],
        sistema:[],
        energia:[],
        estado:[],
        precio: [],
        descripcion:[],
      })

      console.log(product)

      const sendProduct = (item) => {
    
        const db = getFirestore()
        const collectionRef = collection(db, "items")

        addDoc(collectionRef, item)
            .then((response) => console.log({ response }) )
            .catch((error) => console.log({ error }))
    }

    return (
        <> 
        {
            !edit 
            ? <ProductForm> </ProductForm>
            : <ProductFormEdit productSelected={productSelected}> </ProductFormEdit>
           
        }
            
        </>
    )
}


export default ProductForm