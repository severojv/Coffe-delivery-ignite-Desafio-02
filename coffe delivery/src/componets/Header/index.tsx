import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-cofee.svg'
import { CarrinhoButtonContainer, EnderecoButtonContainer, HeaderContainer } from './styles'
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navegate = useNavigate();

    return (
        <HeaderContainer>
            <img src={logo} alt="" onClick={() => navegate("/")} />
            <nav>
                <EnderecoButtonContainer type="button">
                    <NavLink to="/endereco" title='endereco'><MapPin size={24} />Porto Alegre,RS </NavLink>
                </EnderecoButtonContainer>
                <CarrinhoButtonContainer>
                    <NavLink to="/carrinho" title='carrinho'><ShoppingCartSimple size={24} /></NavLink>
                </CarrinhoButtonContainer>
            </nav>
        </HeaderContainer>
    )
}