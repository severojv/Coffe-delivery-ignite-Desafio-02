import { Outlet } from "react-router-dom";
import { Header } from "../../componets/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}