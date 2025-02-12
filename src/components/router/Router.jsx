import { Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Menu } from "../menu/Menu"
import { Logistica } from "../logistica/Logistica"

export function Router() {

    return(
        <>
            <Menu/> 
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/logistica" element={<Logistica/>} />
            </Routes>

        </>
    )
}