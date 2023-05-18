import { useLocation, useParams } from "react-router-dom"
import ProductForm from "../Form/ProductForm"

const ProductFormContainer = ({productSelected}) => {

    return (
        <> 
            { productSelected ? <ProductForm productSelected={productSelected} /> : <ProductForm  />  }
            
        </>
    )
}


export default ProductFormContainer