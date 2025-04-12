import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { DivEndereco, DivPrincipal } from "../Endereco/styles";
import { PaymentContainer, PaymentOption } from "./styles";
import { useState } from "react";

export function Pagamento() {
    const [selected, setSelected] = useState("credit");

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
                        selected={selected === "credit"}
                        onClick={() => setSelected("credit")}>
                
                    <CreditCard size={16} />
                    CARTÃO DE CRÉDITO
                </PaymentOption>

                <PaymentOption
                        selected={selected === "debit"}
                        onClick={() => setSelected("debit")}>
                    <Bank size={16} />
                    CARTÃO DE DÉBITO
                </PaymentOption>

                <PaymentOption
                        selected={selected === "cash"}
                        onClick={() => setSelected("cash")}>
                    <Money size={16} />
                    DINHEIRO
                </PaymentOption>
            </PaymentContainer>
        </DivPrincipal>
    )
}