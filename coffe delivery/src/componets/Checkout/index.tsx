import { CoffesSelecteds } from "./CoffesSelecteds";
import { Endereco } from "./Endereco";
import { Pagamento } from "./Pagamento";
import { DivGridContainer } from "./styles";

export function Checkout(){
    return(
        <DivGridContainer>
            <div>
            <Endereco></Endereco>
            <Pagamento></Pagamento>

            </div>
            <CoffesSelecteds></CoffesSelecteds>
        </DivGridContainer>
    )
}