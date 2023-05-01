import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemList from "../ItemList/ItemList"
import {  collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import Cart from "../Cart/Cart"



const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
      const { category } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
    
        if(category) {
            const queryResult = query(itemsCollection, where("categoria", "==", `${ category }` ))
          
            getDocs(queryResult)
                .then((snapshot) => {
                    const docs = snapshot.docs
                    console.log(docs)
                    setProducts(docs.map((doc) =>({ id: doc.id, ...doc.data() })) )
                })
                .catch((error) => console.log({ error }))
        } else {
            getDocs(itemsCollection)
                .then((snapshot) => {
                    const docs = snapshot.docs
                    setProducts(docs.map((doc) =>({ id: doc.id, ...doc.data() })) )
                })
                .catch((error) => console.log({ error }))
        }
    }, [category])

    return (
        <>
            <Cart products={products}> </Cart>
            <h1 className="titulo"> { greeting } </h1>
            <ItemList products={ products } setProducts={setProducts} /> 
        </> 
 
    )
}

export default ItemListContainer