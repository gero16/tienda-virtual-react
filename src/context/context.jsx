import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {

    const [productsAdded, setProductsAdded] = useState([])
  
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
 
 
    return (
        <Context.Provider value ={{ productsAdded, onAdd, getCart }}> 
            { children } 
        </Context.Provider>
    )
}

