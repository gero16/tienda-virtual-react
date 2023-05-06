import { useState, createContext } from "react"
import { collection, getFirestore, getDocs, getDoc, doc } from "firebase/firestore"

export const Context = createContext()

let productObject = {
    nombre:[],categoria:[],color:[],marca:[],grafica:[], procesador:[], ram:[], sistema:[], energia:[], estado:[], precio: [], descripcion:[],
}

export const CustomProvider = ({ children }) => {

    const [productsAdded, setProductsAdded] = useState([])
    const [session, setSession] = useState(false)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(productObject)


    const isInCart = (product) => {        
        return productsAdded.some((productAdded) => productAdded.id === product.id )
    }

    const getCart = () => {
        const productStorage = JSON.parse(localStorage.getItem('product'));
        if(productStorage) {
            setProductsAdded(productStorage)
        }
    }

    const onAdd = (product, quantity) => {

        const isAlreadyAdded = isInCart(product)
 
        if(isAlreadyAdded) {
            const productModify = productsAdded.find((productsAdded => productsAdded.id === product.id))
            
            const productModified = {
                ...productModify,
                quantity: productModify.quantity + quantity,
            }
            
            const productStorage = JSON.parse(localStorage.getItem('product'));
            const products = productStorage.filter(productsAdded => productsAdded.id !== product.id) 
            localStorage.setItem('product', JSON.stringify([...products, productModified]))

            setProductsAdded(prevState => prevState.map((productsAdded) => productsAdded.id === product.id ? productModified : productsAdded))
        } else {
            setProductsAdded((prevState) => prevState.concat({ ...product, quantity }) )
            product.quantity = quantity
            const productStorage = JSON.parse(localStorage.getItem('product'));
            console.log(productStorage)
            if(productStorage) {
                localStorage.setItem('product', JSON.stringify([...productStorage, product]))
            } else {
                localStorage.setItem('product', JSON.stringify([product]))
            }
           
        }
    }
 
    const getSession = () => {
        const sesionStorage = JSON.parse(localStorage.getItem('session'));
        if(sesionStorage) {

            setSession(true)
        }

        if(!sesionStorage) {
            setSession(false)
        }
    }
 
    const postSession = (user) => {
        console.log(user)
        localStorage.setItem('session', JSON.stringify(user))
        setSession(true)
    }

    const getAllProducts = () => {
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
    
        
            getDocs(itemsCollection)
                .then((snapshot) => {
                    const docs = snapshot.docs
                    setProducts(docs.map((doc) =>({ id: doc.id, ...doc.data() })) )
                    return products
                })
                .catch((error) => console.log({ error }))  
    }
   
const getProduct = (id) => {
    const db = getFirestore()
    const itemRef = doc(db, "items", `${ id }`)
 
    getDoc(itemRef)
      .then((snapshot) => {
        if(snapshot.exists()) {
         // console.log(snapshot.data())
          setProduct({ id: snapshot.id, ...snapshot.data() })
          return product
        }
    }).catch((error) => console.log({error}))
}
    return (
        <Context.Provider value={{ productsAdded, onAdd, getCart, session, getSession, postSession, getAllProducts, products, getProduct, product, setProduct }}> 
            { children } 
        </Context.Provider>
    )
}

