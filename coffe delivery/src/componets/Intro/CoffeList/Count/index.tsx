import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ButtonInputCount, ButtonInputCounts, InputNumberContainner, Tomagap } from "./style";
import { useContext ,useEffect,useState} from "react";
import { CoffeContext ,Coffe} from "../../../../Context/CoffeContext"; 

interface InputNumberProps {
    coffe: Coffe;
}

export function InputNumber({coffe}:InputNumberProps) {
    const {addToCart,cart}=useContext(CoffeContext);
    const [quantity,setQuantity]=useState(1);
    useEffect(() => {
        console.log("Carrinho atualizado:", cart);
      }, [cart]);
    function diminuir(){
        setQuantity((prev)=> prev > 1 ? prev -1 : 1);
    }
    function aumentar(){
        setQuantity((prev)=> prev+1);
    }

    function handleAddToCart(){
        addToCart({...coffe,qnt:quantity})
        console.log("Café recebido no componente:", coffe);
        setQuantity(1)
   
    }

    return (

        <InputNumberContainner>
        <Tomagap>

            <ButtonInputCount onClick={diminuir}><Minus size={14} /></ButtonInputCount>
            <span>{quantity}</span>
            <ButtonInputCount onClick={aumentar}><Plus size={14} /></ButtonInputCount>
        </Tomagap>
            <ButtonInputCounts onClick={handleAddToCart}><ShoppingCart size={18} weight="fill"color="white"/></ButtonInputCounts>
        </InputNumberContainner>
    )
}