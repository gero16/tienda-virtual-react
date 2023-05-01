import { NavLink } from "react-router-dom"
import { useState, CSSProperties, useEffect } from "react";
//import Loader from "../Loader/loader";
import { ThreeDots  } from  'react-loader-spinner'
import Filter from "../Filter/Filter";

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
                    ? <div className="text-center m-5 flex">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <ThreeDots height="150" width="150" radius="9" color="#C70039" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
                        </div> 
                    </div>
                    : <> 
                        <Filter prices={prices} valueFilter={valueFilter} />

                        {filter 
                            ? <>
                                { productsFiltered.length === 0 
                                    ? <div className="text-center">
                                        <h3> No hay Productos!</h3>
                                    </div>
                                    : productsFiltered.map((product, index) => {
                                        return (
                                            <div className="col-3 " key={ product.id } > 
                                        
                                                <NavLink to={`/item/${ product.id }`}>
                                                    <div className="card mt-4 p-1 text-center shadow bg-body rounded" >
                                                        <img className="card-img-top" src={product.img} alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title"> {product.nombre }</h5>
                                                            <span className="text-danger fw-bold ">  USD { product.precio }  </span>
                                                        </div>
                                                            <div className={ product.stock < 1 ? "card-footer bg-danger " : 'card-footer bg-transparent' } >
                                                                <p className={ product.stock < 1 ? "text-white" : ' text-primary' }> {product.stock < 1 ?  "No hay Stock" : "Disponible" }  </p> 
                                                            </div>       
                                                    </div>
                                                </NavLink>
                                            </div>
                                            ) 
                                        })
                                }
                              </>
                            :
                                <>
                                {products.map((product, index) => {
                                    return (   
                                        <div className="col-3 " key={ product.id } > 
                                            <NavLink to={`/item/${ product.id }`}>
                                                <div className="card mt-4 p-1 text-center shadow bg-body rounded" >
                                                    <img className="card-img-top" src={product.img} alt="Card image cap" />
                                                    <div className="card-body">
                                                        <h5 className="card-title"> {product.nombre }</h5>
                                                        <span className="text-danger fw-bold ">  USD { product.precio }  </span>
                                                    </div>
                                                    <div className={ product.stock < 1 ? "card-footer bg-danger " : 'card-footer bg-transparent' } >
                                                        <p className={ product.stock < 1 ? "text-white" : ' text-primary' }> {product.stock < 1 ?  "No hay Stock" : "Disponible" }  </p> 
                                                    </div>       
                                                </div>
                                            </NavLink>
                                        </div>
                                        ) 
                                    })
                                }
                                </>
                        }
                    </>
            }
        </div>    
    )
}

export default ItemList