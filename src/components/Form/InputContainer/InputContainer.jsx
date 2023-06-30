import { useContext, useState } from "react"
import { Context } from "../../../context/context"

const InputContainer = ({type, name, value, options }) => {
    const { product, setProduct } = useContext(Context)
    
    console.log(product.categoria)
    return (
        <> 
        {type === "select" 
            ? <div className="col">
                <div className="form-outline">
                    <select 
                        className="form-select" 
                        aria-label="Default select example" 
                        name="categoria" 
                        defaultValue={product.categoria}
                        onChange={(e) => setProduct({...product, categoria:e.target.value})}
                        >
                        <option value={product.categoria} disabled> {product.categoria} </option>
                        {
                            options.map((option, key) => {
                                return (
                                    <option 
                                        value={option.toLowerCase()} 
                                        key={key}> {option} 
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            :
            <div className="col">
                <div className="form-outline">
                { type === "number" 
                    ? <input 
                        type={type} 
                        className="form-control" 
                        name={name} 
                        value={product[name] ? value : " "} 
                        onChange={(e) => setProduct({...product, [name]: parseInt(e.target.value)})} 
                    />
                    
                    : <input 
                        type={type} 
                        className="form-control" 
                        name={name} 
                        value={product[name] ? value : " "} 
                        onChange={(e) => setProduct({...product, [name]:e.target.value}) } 
                    />
                }
                
                <label className="form-label" htmlFor="form3Example1"> {name} </label>
            </div>
        </div>
        }
       </>

    )
}


export default InputContainer