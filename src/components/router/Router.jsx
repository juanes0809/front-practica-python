import { Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Menu } from "../menu/Menu"

export function Router() {

    return(
        <>
            <Menu/> 
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>

        </>
    )
}