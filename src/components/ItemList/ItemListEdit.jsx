import { NavLink } from "react-router-dom"

import ItemDetailMini from "../ItemDetail/ItemDetailMini";
import Loader from "../Loader/Loader"
import { useEffect, useState } from "react";
import {  collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import { useContext } from "react";
import { Context } from "../../context/context";
const ItemListEdit = () => {
  
    const { getAllProducts, products } = useContext(Context)

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
                                    <h3> Editar </h3>
                                    { products.map((product, index) => {
                                        return (   
                                            <div className="col-4 col-sm-4 col-lg-3" key={ product.id } > 
                                                <NavLink to={`/item/${ product.id }/edit`}>
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