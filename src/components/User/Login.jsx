import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { NavLink, useParams } from 'react-router-dom';

const Login = () => {

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' label='Password'  type='password' size="lg"/>

          <div className="d-flex justify-content-between mx-6 mb-4">
            <MDBCheckbox name='flexCheck' value=''  label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>
          

          <MDBBtn className="mb-4 w-100" size="lg">  Iniciar Sesión </MDBBtn>
    

          <div className="text-center m-3">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <NavLink to="/sign-up">
            <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#b22222', border: "1px solid white"}}>
                Registrarse
            </MDBBtn>
          </NavLink>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;