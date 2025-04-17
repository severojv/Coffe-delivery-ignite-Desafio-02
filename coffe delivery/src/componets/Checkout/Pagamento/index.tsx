import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { DivEndereco, DivPrincipal } from "../Endereco/styles";
import { PaymentContainer, PaymentOption } from "./styles";
import { useContext } from "react";
import { CoffeContext } from "../../../Context/CoffeContext";

export function Pagamento() {
    const{ selected, setSelected} = useContext(CoffeContext);
    return (
        <DivPrincipal>

            <DivEndereco>
                <CurrencyDollar size={22} />
                <div>

                    <span>Endereço de entrega</span>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </DivEndereco>
            <PaymentContainer>
                <PaymentOption
                    selected={selected.selecionado === "CARTÃO DE CRÉDITO"}
                    onClick={() => setSelected({ selecionado: "CARTÃO DE CRÉDITO" })}
                >

                    <CreditCard size={16} />
                    CARTÃO DE CRÉDITO
                </PaymentOption>

                <PaymentOption
                    selected={selected.selecionado === "CARTÃO DE DÉBITO"}
                    onClick={() => setSelected({ selecionado: "CARTÃO DE DÉBITO" })}
                >
                    <Bank size={16} />
                    CARTÃO DE DÉBITO
                </PaymentOption>

                <PaymentOption
                    selected={selected.selecionado === "DINHEIRO"}
                    onClick={() => setSelected({ selecionado: "DINHEIRO" })}
                >
                    <Money size={16} />
                    DINHEIRO
                </PaymentOption>
            </PaymentContainer>
        </DivPrincipal>
    )
}