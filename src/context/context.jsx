import { useState, createContext, useEffect } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {

    const [productsAdded, setProductsAdded] = useState([])
  
 
    const isInCart = (product) => {
        return productsAdded.some((productAdded) => productAdded.id === product.id )
    }

    const onAdd = (product, quantity) => {
        const isAlreadyAdded = isInCart(product)

        if(isAlreadyAdded) {
            const productModify = productsAdded.find((productsAdded => productsAdded.id === product.id))
            console.log(productModify)
            
            const productModified = {
                ...productModify,
                quantity: productModify.quantity + quantity,
            }

            console.log(productModified)

            setProductsAdded(prevState => prevState.map((productsAdded) => productsAdded.id === product.id ? productModified : productsAdded))

            //localStorage.setItem('product', JSON.stringify(productModified))
        } else {
            setProductsAdded((prevState) => prevState.concat({ ...product, quantity }) )
            product.quantity = quantity
            //localStorage.setItem('product', JSON.stringify(product))
        }
    }
    
    const Categories = () => {
        
    }
 
    return (
        <Context.Provider value ={{ productsAdded, onAdd }}> 
            { children } 
        </Context.Provider>
    )
}

