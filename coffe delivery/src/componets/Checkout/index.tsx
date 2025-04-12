import { Endereco } from "./Endereco";
import { Pagamento } from "./Pagamento";

export function Checkout(){
    return(
        <div>
            <Endereco></Endereco>
            <Pagamento></Pagamento>
        </div>
    )
}