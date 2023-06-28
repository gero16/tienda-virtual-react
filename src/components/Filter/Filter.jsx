import { useState } from "react"

const Filter = ({valueFilter, prices}) => {
    
    return(
        <div>
            <h4> Filtrar por el Precio </h4>
            <div className="text-center">
                <input 
                    type="range" 
                    className="form-range" 
                    min="0" 
                    max="1000" 
                    id="customRange3" 
                    value={prices}
                    step="10"
                    onChange={(e) => valueFilter(e)}
                />
                <span> USD { prices }</span>
            </div>
        </div>
    
    )
}

export default Filter