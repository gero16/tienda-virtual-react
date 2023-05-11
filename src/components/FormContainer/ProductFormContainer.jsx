import { useLocation, useParams } from "react-router-dom"
import ProductForm from "../Form/ProductForm"

const ProductFormContainer = ({productSelected}) => {
    let { id } = useParams();
    console.log(productSelected)
    console.log(id)
    return (
        <> 
            { productSelected ? <ProductForm productSelected={productSelected} /> : <ProductForm  />  }
            
        </>
    )
}


export default ProductFormContainer