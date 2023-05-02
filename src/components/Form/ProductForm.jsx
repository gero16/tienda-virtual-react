
const ProductForm = () => {
    return (
        <>
            <form>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1"> Nombre </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <select className="form-select" aria-label="Default select example">
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
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1"> Disco </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example2"> Grafica </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1"> Procesador </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example2"> Ram </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1"> Estado </label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" className="form-control" />
                            <label className="form-label" htmlFor="form3Example2"> Precio </label>
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-3">

                    <input className="form-control" type="file" id="formFile" />
                </div>

                <div className="form-outline mb-2">
                    <textarea className="form-control" rows="4"></textarea>
                    <label className="form-label" htmlFor="form4Example3">Descripcion</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4"> Agregar Producto </button>
            </form>
        </>
    )
}


export default ProductForm