import { useEffect, useContext, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Context } from "../../context/context"
import ItemList from "../ItemList/ItemList"
import ItemListEdit from "../ItemList/ItemListEdit"
import {  collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import Cart from "../Cart/Cart"



const ItemListContainer = ({ greeting }) => {
    let location = useLocation();
    const { getCart } = useContext(Context)
    const [products, setProducts] = useState([])
    const { category } = useParams()
    const [edit, setEdit] = useState(false)
    
    useEffect(() => {
        // No me queda claro porque tengo que usar un useEffect
        console.log(location.pathname)
        if(location.pathname == "/items/edit") {
            setEdit(true)
        }

        getCart()
    }, [])


    useEffect(() => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
    
        if(category) {
            const queryResult = query(itemsCollection, where("categoria", "==", `${ category }` ))
          
            getDocs(queryResult)
                .then((snapshot) => {
                    const docs = snapshot.docs
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
    console.log(edit)
    return (
        <>
            <Cart products={products}> </Cart>
            <h1 className="titulo"> { greeting } </h1>
            {
                edit ? <ItemListEdit products={ products } setProducts={setProducts} />  :  <ItemList products={ products } setProducts={setProducts} />
            }
          
        </> 
 
    )
}

export default ItemListContainer