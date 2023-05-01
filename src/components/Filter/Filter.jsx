import { useState } from "react"

const Filter = ({valueFilter, prices}) => {
    
    return(
        <div>
            <h3> Filtrar por el Precio </h3>
            <div className="text-center">
                <input 
                    type="range" 
                    className="form-range" 
                    min="0" 
                    max="1000" 
                    id="customRange3" 
                    value={prices}
                    onChange={(e) => valueFilter(e)}
                />
                <span> USD { prices }</span>
            </div>
        </div>
    
    )
}

export default Filter