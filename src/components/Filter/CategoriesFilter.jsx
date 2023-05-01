import { useState } from "react"
import { NavLink } from "react-router-dom"
const CategoriesFilter = ({products, category }) => {
    let result = products.filter((product, index)=>{
        return products.indexOf(product.categoria) === index;
    })
  
    return (
        <div className="mt-5">
            <ul>

                <li className="mt-3"> 
                    <NavLink to={`/categories/celulares`}>
                        Celulares 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/notebooks`}>
                        Notebooks 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/PC`}>
                        PCs 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/tablets`}>
                        Tablets 
                    </NavLink>
                </li>

                <li></li>
            </ul>
        </div>
    
    )
}

export default CategoriesFilter