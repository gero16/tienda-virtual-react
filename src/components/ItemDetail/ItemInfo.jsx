
const ItemInfo = ({product}) => {
    return (
        <div className="card-body mb-4">
            <div className="row">
                <div className="col">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item-dark p-2">
                            <strong> Marca:</strong>
                            <span className="card-text"> { product.marca } </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong> Tarjeta de Video:</strong>
                            <span className="card-text"> { product.grafica ? product.grafica : "No tiene"} </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text "> Color: </strong>
                            <span className="card-text"> { product.color } </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong className="card-text"> Procesador: </strong>
                            <span className="card-text"> { product.procesador } </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Memoria RAM:</strong>
                            <span className="card-text"> { product.ram } </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong className="card-text"> Disco Duro:</strong>
                            <span className="card-text"> { product.disco } </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Sistema Operativo: </strong>
                            <span className="card-text"> { product.sistema } </span>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Pantalla: </strong>
                            <span className="card-text"> { product.pantalla ? product.pantalla : "No" } </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong className="card-text"> Resolucion: </strong>
                            <span className="card-text"> { product.resolucion ? product.resolucion : "No" } </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Frecuencia: </strong>
                            <span className="card-text"> { product.frecuencia ? product.frecuencia : "No" } </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong className="card-text"> Redes: </strong>
                            <span className="card-text"> {product.redes} </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Peso: </strong>
                            <span className="card-text"> {product.peso} </span>
                        </li>
                        <li className="list-group-item p-2">
                            <strong className="card-text"> Camara: </strong>
                            <span className="card-text"> { product.camara ? product.camara : "No" } </span>
                        </li>
                        <li className="list-group-item-dark p-2">
                            <strong className="card-text"> Energia: </strong>
                            <span className="card-text"> { product.energia ? product.energia : "Desconocido" } </span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        
    )
}

export default ItemInfo;