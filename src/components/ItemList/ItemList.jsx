import { NavLink } from "react-router-dom"
import { useState, CSSProperties, useEffect } from "react";
//import Loader from "../Loader/loader";

import Filter from "../Filter/Filter";
import ItemDetailMini from "../ItemDetail/ItemDetailMini";
import Loader from "../Loader/Loader"
import CategoriesFilter from "../Filter/CategoriesFilter";

const ItemList = ({ products, setProducts }) => {
    const [prices, setPrices] = useState(0)
    const [filter, setFilter] = useState(false)
    const [productsFiltered, setProductsFiltered] = useState([])
  
    const valueFilter = (event) => {
        setPrices(event.target.value)

       let newProducts = products.filter(product => product.precio < event.target.value)

        if(event.target.value > 0 ) {
            setProductsFiltered(newProducts)
            setFilter(true)
            
        }

        if(event.target.value == 0 ) {
            setFilter(false)
            setProductsFiltered(products)

        }
    }
 
    return (
        <div className="row mb-5 ">
            { 
                !products.length > 0
                    ? <div className="text-center m-5 flex"> <Loader /> </div>
                    : <div className="row">

                        <div className="col-3 col-md-2 text-center mt-3">
                            <Filter prices={ prices } valueFilter={ valueFilter } />
                            <CategoriesFilter products={ products }> </CategoriesFilter>
                        </div>

                        <div className="col-9 col-md-10">
                            <div className="row">
                                {filter 
                                    ? <>
                                        { productsFiltered.length === 0 
                                            ? <div className="text-center">
                                                
                                                <h3> No hay Productos!</h3>
                                            </div>
                                            : productsFiltered.map((product, key) => {
                                                return (
                                                    <div className={`col col-md-4 col-xl-3`} key={ product.id } > 
                                                        <NavLink to={`/item/${ product.id }`}>
                                                            <ItemDetailMini product={product}/> 
                                                        </NavLink>
                                                    </div>
                                                ) 
                                            })
                                        }
                                    </>
                                    : <>
                                        { products.map((product, index) => {
                                            return (   
                                                <div className="col col-md-4 col-xl-3" key={ product.id } > 
                                                    <NavLink to={`/item/${ product.id }`}>
                                                        <ItemDetailMini product={product}/> 
                                                    </NavLink>
                                                </div>
                                                ) 
                                            })
                                        }
                                        </>
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>    
    )
}

export default ItemList