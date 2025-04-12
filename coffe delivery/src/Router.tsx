import {Route,Routes} from "react-router-dom"
import { DefaultLayout } from "./layouts/defaultLayout"
import { Home } from "./componets/pages/Home"
import { Checkout } from "./componets/Checkout"
import { Carrinho } from "./componets/pages/Carrinho"
export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            </Route>
        </Routes>
    )
}