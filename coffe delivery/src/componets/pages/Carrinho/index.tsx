import { MapPin, Timer, CurrencyDollarSimple } from "@phosphor-icons/react";
import { DivPrincPedido, IconMap, Local, OderInfo, IconCash, IconTimer, DivEntrega, DivGrid, DivImg } from "./styles";
import { CoffeContext } from "../../../Context/CoffeContext";
import { useContext } from "react";
import ilustrcao from '../../../assets/Illustration.png'

export function Carrinho() {
    const { endereco, selected } = useContext(CoffeContext);

    return (
    <DivGrid>

        <DivPrincPedido>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <OderInfo>
                <Local>
                    <IconMap>
                        <MapPin size={24} />
                    </IconMap>
                    <DivEntrega>

                        <p>Entrega em {endereco.logradouro}, {endereco.numero}</p>
                        <p>{endereco.bairro} - {endereco.localidade}, {endereco.uf}</p>
                    </DivEntrega>
                </Local>

                <Local>
                    <IconTimer>
                        <Timer size={24} />
                    </IconTimer>
                    <DivEntrega>
                        <p>Previsão de Entrega</p>

                        <p><strong>20 min - 30 min</strong></p>
                    </DivEntrega>
                </Local>

                <Local>
                    <IconCash>
                        <CurrencyDollarSimple size={24} />
                    </IconCash>
                    <DivEntrega>

                        <p>Pagamento na Entrega</p>
                        <p>{selected.selecionado}</p>
                    </DivEntrega>
                </Local>
            </OderInfo>
        </DivPrincPedido>
        <DivImg>
            <img src={ilustrcao} alt="" />
        </DivImg>
    </DivGrid>
    )
}