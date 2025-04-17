import { useContext } from "react";
import { Coffe, CoffeContext } from "../../../Context/CoffeContext";
import { Details, DivButton, DivCoffe, DivDisplay, DivFrame, DivPrincipalSel, DivTop, Frame, ImgCart, NomeCart, PrecoCart, Tomagaps } from "./styles";
import { RemoveCart } from "./removeCart";
import {  useNavigate } from "react-router-dom";




export function CoffesSelecteds() {
    const navegate = useNavigate();

    const { cart } = useContext(CoffeContext);
    const total = Number(cart.reduce((sum, coffe) => sum + coffe.preco * (coffe.qnt ?? 1), 0)).toFixed(2);
    const entrega = Number(2.22)
    const totalComEntrega = (Number(total) + entrega).toFixed(2)
    const ShowCartCoffes = ({ coffe }: { coffe: Coffe }) => {

        return (
            <DivDisplay>

                <ImgCart><img src={coffe.imagem} alt={coffe.nome} /></ImgCart>
                <Tomagaps>
                    <Details>

                        <NomeCart>{coffe.nome}</NomeCart>
                        <RemoveCart coffe={coffe} />
                    </Details>
                    <PrecoCart>R${(coffe.preco * (coffe.qnt || 0)).toFixed(2)}</PrecoCart>
                </Tomagaps>
            </DivDisplay>
        )
    }
    return (
        <DivTop>
            <h1>Cafés selecionados</h1>

            <DivPrincipalSel>
                <DivCoffe>
                    {cart.length > 0 ? (
                        cart.map((coffe) => (
                            <ShowCartCoffes key={coffe.nome} coffe={coffe} />
                        ))
                    ) : (
                        <p>Nenhum café adicionado ainda 😢</p>
                    )}

                </DivCoffe>
                <DivFrame>
                    <Frame>
                    <span>Total de Itens</span>
                    <h2>R$ {total}</h2>
                    </Frame>

                    <Frame>
                    <span>Entrega</span>
                    <h2>R$ {entrega}</h2>
                    </Frame>

                    <Frame>
                    <h2>Total</h2>
                    <h2>R$ {totalComEntrega}</h2>
                    </Frame>

                </DivFrame>

                <DivButton
                onClick={() => navegate("/carrinho")}>
                    CONFIRMAR PEDIDO
                </DivButton>
            </DivPrincipalSel>
        </DivTop>
    );
}
