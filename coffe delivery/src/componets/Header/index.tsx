import {  NavLink } from 'react-router-dom'
import logo from '../../assets/logo-cofee.svg'
import { HeaderContainer } from './styles'
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navegate=useNavigate();

    return (
        <HeaderContainer>
            <img src={logo} alt="" onClick={()=>navegate("/")}/>
            <nav>
                <NavLink to="/endereco" title='endereco'><MapPin size={24} />Porto Alegre,RS </NavLink>
                <NavLink to="/carrinho" title='carrinho'><ShoppingCartSimple size={24} /></NavLink>
            </nav>
        </HeaderContainer>
    )
}