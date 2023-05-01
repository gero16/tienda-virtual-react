import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0)

    return (
        <div className="item-count-container mt-2">
                <ul className="list-group list-group-horizontal p-0 m-0">
                    <li className="list-group-item p-0 ">
                        <Button 
                            variant="light" 
                            onClick={() => setCount((prevState) => prevState - 1)} 
                            disabled={count === stock}
                            className='pe-3 ps-3'
                        > -
                        </Button>
                    </li>
                    <li className="list-group-item align-items center p-2">
                        <span className='h5'> { count } </span>
                    </li>
                    <li className="list-group-item p-0">
                        <Button 
                            variant="light" 
                            onClick={() => setCount((prevState) => prevState + 1)} 
                            disabled={count === stock}
                        > +
                        </Button>
                    </li>
                </ul>

       
                    <button 
                        type="button" 
                        className="btn btn-outline-dark btn-lg mt-3 p-3"
                        onClick ={() => onAdd(count)}
                        > Agregar
                    </button> 
           
        </div>
        
    )
}


export default ItemCount;