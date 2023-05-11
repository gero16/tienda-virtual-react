import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import ItemDetailMini from "../ItemDetail/ItemDetailMini";
import Loader from "../Loader/Loader"

import { useContext } from "react";
import { Context } from "../../context/context";
import DeleteIcon from "../../assets/delete.png"
import EditIcon from "../../assets/edit.png"
import BackIcon from "../../assets/flecha.png"

const ItemListEdit = () => {
    const { getAllProducts, products } = useContext(Context)
    let location = useLocation();
    let locationEdit = "/items/edit"

    useEffect(() => {
        getAllProducts()
        
    }, [])
    return (
        <>
            { 
                !products.length > 0
                    ? <div className="text-center m-5 flex"> <Loader /> </div>
                    : 
                        <div className="row m-3 ">
                                <>
                                    <div className="d-flex justify-content-between align-items-center"> 
                                        {location.pathname === locationEdit 
                                        ? <>
                                            <h3>
                                                Elija una Publicacion para Editar 
                                                <img src={EditIcon} alt="" />  
                                            </h3>
                                          
                                                <NavLink to="/admin">
                                                    <img src={BackIcon} alt=""  style={{width : "1vw", transform: "rotate(-180deg)"}} />  
                                                    <span style={{height: "64px"}}> Volver al Menu </span>
                                                    
                                                </NavLink>
                                            </>
                                      
                                        : <>
                                        <h3>
                                            Elija una Publicacion para Borrar 
                                            <img src={DeleteIcon} alt=""  style={{width : "64", height:"48px"}} />  
                                        </h3>
                                      
                                            <NavLink to="/admin">
                                                <img src={BackIcon} alt=""  style={{width : "1vw", transform: "rotate(-180deg)"}} />  
                                                <span style={{height: "64px"}}> Volver al Menu </span>
                                                
                                            </NavLink>
                                        </>
                                        } 
                                        
                                    </div>
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
        </>
    )
}

export default ItemListEdit