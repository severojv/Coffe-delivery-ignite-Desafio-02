import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-cofee.svg'
import { CarrinhoButtonContainer, EnderecoButtonContainer, HeaderContainer, SpanActiveNum } from './styles'
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CoffeContext } from '../../Context/CoffeContext';

export function Header() {
    const navegate = useNavigate();
    const { totalItems } = useContext(CoffeContext);

    return (
        <HeaderContainer>
            <img src={logo} alt="" onClick={() => navegate("/")} />
            <nav>
                <EnderecoButtonContainer type="button">
                    <NavLink to="/checkout" title='endereco'><MapPin size={24} />Porto Alegre,RS </NavLink>
                </EnderecoButtonContainer>
                <CarrinhoButtonContainer>
                    <NavLink to="/carrinho" title='carrinho'><ShoppingCartSimple size={24} /></NavLink>
                    {totalItems > 0 && (
                        <SpanActiveNum>{totalItems}</SpanActiveNum>
                    )}

                </CarrinhoButtonContainer>
            </nav>
        </HeaderContainer>
    )
}