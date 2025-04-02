import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ButtonInputCount, ButtonInputCounts, InputNumberContainner, Tomagap } from "./style";

export function InputNumber() {
    return (

        <InputNumberContainner>
        <Tomagap>

            <ButtonInputCount><Minus size={14} /></ButtonInputCount>
            <input type="number" value="1" min="1"/>
            <ButtonInputCount><Plus size={14} /></ButtonInputCount>
        </Tomagap>
            <ButtonInputCounts><ShoppingCart size={18} weight="fill"color="white"/></ButtonInputCounts>
        </InputNumberContainner>
    )
}