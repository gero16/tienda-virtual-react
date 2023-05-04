import { useEffect, useState } from "react"
import {  doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useContext } from "react"
import { Context } from "../../context/context"

const ItemDetailContainer = ({ productID }) => {
    const { getCart } = useContext(Context)
    const [product, setProduct] = useState([])
    let { id } = useParams();

    useEffect(() => {
        getCart()

        const db = getFirestore()
        const itemRef = doc(db, "items", `${ id }`)
     
        getDoc(itemRef)
          .then((snapshot) => {
            if(snapshot.exists()) {
             // console.log(snapshot.data())
              setProduct({ id: snapshot.id, ...snapshot.data() })
            }
        }).catch((error) => console.log({error}))
      }, [])
    
  return (
    <div className="container "> 
        
        <ItemDetail product={ product } descripcion={true} detalle={true} />
        
        
    </div>
    
  )
}


export default ItemDetailContainer