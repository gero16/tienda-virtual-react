import { collection, getFirestore, addDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { Context } from "../../context/context"
import BackIcon from "../../assets/flecha.png"
import AddIcon from "../../assets/boton-agregar.png"
import InputContainer from "./InputContainer/InputContainer"

const ProductForm = ({productSelected}) => {
    const { product, setProduct, getProduct } = useContext(Context)
    let { id } = useParams();

    useEffect(() => {
        if(id) getProduct(id)
      }, [])


    const sendProduct = (item) => {
        const db = getFirestore()
        const collectionRef = collection(db, "items")
    
        addDoc(collectionRef, item)
            .then((response) => console.log({ response }) )
            .catch((error) => console.log({ error }))
    }

    const updateProduct = (item) => {
        const db = getFirestore()
        const updateDocument = doc(db, "items", id)

        updateDoc(updateDocument, item)
            .then(() => {
                console.log("Registro Actualizado!")
                navigate("/");
            } )
          .catch(() => {
            console.log("Error!")
        })
    }
    const options = ["Celulares", "Notebooks", "PC", "Tablets"]

    return (
        <> 
            { productSelected 
        
            ? <form className="m-5">
                    <header className="d-flex justify-content-between">
                        <h2 className="mb-2"> Editar {product.nombre}</h2>
                        <NavLink to="/admin">
                            <img src={BackIcon} alt=""  style={{width : "1vw", transform: "rotate(-180deg)"}} />  
                            <span style={{height: "64px"}}> Volver al Menu </span>
                        </NavLink>
                    </header>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"nombre"} value={product.nombre} />
                    <InputContainer type={"select"} name={"categorias"} value={product.categoria}  options={options} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"marca"} value={product.marca} />
                    <InputContainer type={"text"} name={"color"} value={product.color} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"disco"} value={product.disco} />
                    <InputContainer type={"text"} name={"grafica"} value={product.grafica} />
            
                </div>
                <div className="row mb-2">
                    <InputContainer type={"text"} name={"procesador"} value={product.procesador} />

                    <InputContainer type={"text"} name={"ram"} value={product.ram} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"sistema"} value={product.sistema} />
                    <InputContainer type={"text"} name={"energia"} value={product.sistema} />
                </div>
                
                <div className="row mb-2">
                    <InputContainer type={"text"} name={"estado"} value={product.estado} />
            
                    <InputContainer type={"number"} name={"precio"} value={product.precio} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"img"} value={product.img} />
                  
                    <div className="col">
                        <div className="form-outline">
                        <div className="add-product-image border border-1">
                            {(!product.img =='') ? <img className="new-product-image" src={ product.img} />  : "" } </div>
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-2">
                    <textarea 
                            className="form-control" 
                            rows="4" 
                            value={product.descripcion ? product.descripcion : " "} 
                            name="descripcion"
                            onChange={(e) => setProduct({...product, descripcion:e.target.value})} />
                    <label className="form-label" htmlFor="form4Example3"> Descripcion </label>
                </div>

                <button type="button"  className="btn btn-primary btn-block mb-4" onClick={() => updateProduct(product) }> Actualizar Producto </button>
            </form>

            : <form className="m-5">
                <header className="d-flex justify-content-between">
                    <article className="d-flex mb-2 col align-items-center gap-1">
                        <h2> Agregar un nuevo Producto </h2>
                        <img src={AddIcon} alt=""  style={{width : "50px", height: "50px"}} />
                    </article>
                    <NavLink to="/admin">
                        <img src={BackIcon} alt=""  style={{width : "1vw", transform: "rotate(-180deg)"}} />  
                        <span style={{height: "64px"}}> Volver al Menu </span>
                    </NavLink>
                </header>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"nombre"}  />
                    <InputContainer type={"select"} name={"categorias"} val  options={options} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"marca"} />
                    <InputContainer type={"text"} name={"color"} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"disco"} />
                    <InputContainer type={"text"} name={"grafica"}  />
            
                </div>
                <div className="row mb-2">
                    <InputContainer type={"text"} name={"procesador"}  />
                    <InputContainer type={"text"} name={"ram"} />
                </div>

                <div className="row mb-2">
                    <InputContainer type={"text"} name={"sistema"}  />
                    <InputContainer type={"text"} name={"energia"}  />
                </div>
                
                <div className="row mb-2">
                    <InputContainer type={"text"} name={"estado"}  />
                    <InputContainer type={"number"} name={"precio"}  />
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