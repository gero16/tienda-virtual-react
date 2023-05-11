import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Context } from "../../context/context"

const ProductForm = ({productSelected}) => {
    const { product, setProduct } = useContext(Context)

      const sendProduct = (item) => {
        const db = getFirestore()
        const collectionRef = collection(db, "items")

        addDoc(collectionRef, item)
            .then((response) => console.log({ response }) )
            .catch((error) => console.log({ error }))
    }

    return (
        <> 
        {<form className="m-5">
            <h2 className="mb-2"> Agregar un nuevo Producto </h2>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="nombre" onChange={(e) => setProduct({...product, nombre:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Nombre </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <select className="form-select" aria-label="Default select example" name="categoria" onChange={(e) => setProduct({...product, categoria:e.target.value})}>
                           <option defaultValue={"Categorias"}>Categorias</option>
                           <option value="celulares"> Celulares </option>
                           <option value="notebooks"> Notebooks </option>
                           <option value="pc"> PCs </option>
                           <option value="tablets"> Tablets </option>
                       </select>
                   </div>
               </div>
           </div>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="marca"  onChange={(e) => setProduct({...product, marca:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Marca </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="color" onChange={(e) => setProduct({...product, color:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example2"> Color </label>
                   </div>
               </div>
           </div>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="disco"  onChange={(e) => setProduct({...product, disco:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Disco </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="grafica" onChange={(e) => setProduct({...product, grafica:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example2"> Grafica </label>
                   </div>
               </div>
           </div>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="procesador" onChange={(e) => setProduct({...product, procesador:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Procesador </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="ram" onChange={(e) => setProduct({...product, ram:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example2"> Ram </label>
                   </div>
               </div>
           </div>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="sistema" onChange={(e) => setProduct({...product, sistema:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Sistema </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="energia" onChange={(e) => setProduct({...product, energia:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example2"> Energia </label>
                   </div>
               </div>
           </div>
           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input type="text" className="form-control" name="estado" onChange={(e) => setProduct({...product, estado:e.target.value})} />
                       <label className="form-label" htmlFor="form3Example1"> Estado </label>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                       <input type="number" className="form-control" name="precio" onChange={(e) => setProduct({...product, precio: parseInt(e.target.value) })} />
                       <label className="form-label" htmlFor="form3Example2"> Precio </label>
                   </div>
               </div>
           </div>

           <div className="row mb-2">
               <div className="col">
                   <div className="form-outline">
                       <input className=" form-control" 
                               type="text" 
                               placeholder="URL"
                               name="img"
                               onChange={(e) => setProduct({...product, img:e.target.value})}
                       />
                       <span className="title-stat-forms">Add Image</span>
                   </div>
               </div>
               <div className="col">
                   <div className="form-outline">
                   <div className="add-product-image border border-1">
                       {(!product.img =='') ? <img className="new-product-image" src={ product.img} />  : "" } </div>
                   </div>
               </div>
           </div>

           <div className="form-outline mb-2">
               <textarea className="form-control" rows="4" onChange={(e) => setProduct({...product, descripcion:e.target.value})} />
               <label className="form-label" htmlFor="form4Example3"> Descripcion </label>
           </div>

           <button type="button"  className="btn btn-primary btn-block mb-4" onClick={() => sendProduct(product) }> Agregar Producto </button>
       </form>
    }
    </>
    )
}


export default ProductForm