import { Outlet as Page } from "react-router-dom"
import NavBar from "../NavBar/NavBar"

const Layout = () => {
    return (
        <>
        <NavBar> </NavBar>
        <main className="container">
            <Page> </Page>
        </main>
        </>
    )
}

export default Layout