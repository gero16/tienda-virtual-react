import { Outlet as Page } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

const Layout = () => {
    

    return (
        <main className="container">
            <NavBar> </NavBar>
            <Page> </Page>
        </main>
    )
}



export default Layout