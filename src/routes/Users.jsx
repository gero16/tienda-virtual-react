import Login from "../components/User/Login"
import { useLocation } from "react-router-dom";
import SignUp from "../components/User/SignUp";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Users = ()=> {
  let location = useLocation();
  // console.log(location.pathname) 

  return (
    <div className="App">
      <div className='container'>  
          {
            location.pathname === "/sign-up" ? <SignUp /> : <Login/> 
          }
      </div>

    </div>
  )
}


export default Users