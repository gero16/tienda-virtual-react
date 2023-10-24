import { useState } from "react"
import { NavLink } from "react-router-dom"
const CategoriesFilter = ({products, category }) => {
    let result = products.filter((product, index)=>{
        return products.indexOf(product.categoria) === index;
    })
  
    return (
        <div className="mt-4 p-2">
            <ul className="list-group">
                <li className="mt-3"> 
                    <NavLink to={`/`} className="list-group-item list-group-item-light">
                        Todos 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/celulares`} className="list-group-item list-group-item-light">
                        Celulares 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/notebooks`} className="list-group-item list-group-item-light">
                        Notebooks 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/tablets`} className="list-group-item list-group-item-light">
                        Tablets 
                    </NavLink>
                </li>
                <li className="mt-3"> 
                    <NavLink to={`/categories/PC`} className="list-group-item list-group-item-light">
                        PCs 
                    </NavLink>
                </li>

         
            </ul>
        </div>
    
    )
}

export default CategoriesFilter