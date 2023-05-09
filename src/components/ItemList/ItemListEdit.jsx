import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import ItemDetailMini from "../ItemDetail/ItemDetailMini";
import Loader from "../Loader/Loader"

import { useContext } from "react";
import { Context } from "../../context/context";

const ItemListEdit = () => {
    const { getAllProducts, products } = useContext(Context)
    let location = useLocation();
    let locationEdit = "/items/edit"

    useEffect(() => {
        getAllProducts()
        
    }, [])
    return (
        <div className="row mb-5 ">
            { 
                !products.length > 0
                    ? <div className="text-center m-5 flex"> <Loader /> </div>
                    : 
                        <div className="row">
                                <>
                                    <h3> {location.pathname === locationEdit ? `Elija una Publicacion para Editar`: "Elija una Publicacion para Eliminar"} </h3>
                                    { products.map((product, index) => {
                                        return (   
                                            <div className="col-4 col-sm-4 col-lg-3" key={ product.id } > 
                                                <NavLink to={ location.pathname === locationEdit ? `/item/${ product.id }/edit`:`/item/${ product.id }/delete` }>
                                                    <ItemDetailMini product={product}/> 
                                                </NavLink>
                                            </div>
                                            ) 
                                        })
                                    }
                                    </>
                            
                        </div>
            }
        </div>    
    )
}

export default ItemListEdit