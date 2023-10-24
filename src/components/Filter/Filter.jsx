import { useState } from "react"

const Filter = ({valueFilter, prices}) => {
    
    return(
        <>
            <h4 className="p-3"> Filtrar por Precio </h4>
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
        </>
    
    )
}

export default Filter