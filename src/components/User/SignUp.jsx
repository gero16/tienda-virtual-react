import { useState } from "react"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate()
        
    const [user, setUser] = useState({ nombre: [], apellido: [], correo: [], password: []})
    console.log(user)

    const createUser = (usuario) => {
        const db = getFirestore()
        const collectionRef = collection(db, "users")

        addDoc(collectionRef, usuario)
            .then((response) => {
                console.log({ response })
                navigate(`/`)
            })
            .catch((error) => {
                console.log({ error })
            })
    }

    return(
        <section className="text-center text-lg-start">
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right" style={{background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}>
                    <div className="card-body p-5 shadow-5 text-center">
                        <h2 className="fw-bold mb-5"> Registrarse </h2>
                        <form>
                
                        <div className="row">
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example1" className="form-control" onChange={(e) => setUser({...user, nombre:e.target.value})} />
                                <label className="form-label" htmlFor="form3Example1"> Nombre </label>
                            </div>
                            </div>
                            <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input type="text" id="form3Example2" className="form-control" onChange={(e) => setUser({...user, apellido:e.target.value})}  />
                                <label className="form-label" htmlFor="form3Example2"> Apellido </label>
                            </div>
                            </div>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="email" id="form3Example3" className="form-control" onChange={(e) => setUser({...user, correo:e.target.value})}  />
                            <label className="form-label" htmlFor="form3Example3"> Correo Electrónico </label>
                        </div>

                    
                        <div className="form-outline mb-4">
                            <input type="password" id="form3Example4" className="form-control" onChange={(e) => setUser({...user, password:e.target.value})} />
                            <label className="form-label" htmlFor="form3Example4"> Contraseña </label>
                        </div>

                    
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => createUser(user) }>
                            Registrarse
                        </button>

                    
                        <div className="text-center">
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaFacebook />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaGoogle />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaTwitter />
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <FaGithub />
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4" alt="" />
                </div>
                </div>
            </div>

        </section>

    )
}

export default SignUp