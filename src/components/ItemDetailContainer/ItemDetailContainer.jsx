import { useEffect, useState } from "react"
import Products from "../../mocks/products"
import {  doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({ productID }) => {
    
    const [product, setProduct] = useState([])
    
    let { id } = useParams();

    useEffect(() => {
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
    


   const imgStyle = {
    backgroundImage: `url('${ product.img }')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:"cover",
    width: "450px",
    height: "450px",
    margin: "0 auto"
  };



  return (
    <div className="container "> 
        
        <ItemDetail product={ product } descripcion={true} detalle={true} />
        
        
    </div>
    
  )
}


export default ItemDetailContainer