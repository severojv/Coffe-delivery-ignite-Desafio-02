import { ButtonCoffe, HeaderCoffeContainne } from "./styles";
function handleTradicional(){
    
}
export function HeaderCoffe(){
    return(
        <HeaderCoffeContainne>

        <div>
            <h1>Nossos Cafés</h1>
        </div>

        <ButtonCoffe>
            <button
            onClick={handleTradicional}>
                TRADICIONAL</button>
            <button>ESPECIAL</button>
            <button>COM LEITE</button>
            <button>ALCOÓLICO</button>
            <button>GELADO</button>
        </ButtonCoffe>

        </HeaderCoffeContainne>

    )

}