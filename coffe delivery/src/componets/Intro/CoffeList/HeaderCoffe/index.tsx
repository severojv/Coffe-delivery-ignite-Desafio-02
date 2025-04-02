import { ButtonCoffe, HeaderCoffeContainne } from "./styles";

export function HeaderCoffe(){
    return(
        <HeaderCoffeContainne>

        <div>
            <h1>Nossos Cafés</h1>
        </div>

        <ButtonCoffe>
            <button>TRADICIONAL</button>
            <button>ESPECIAL</button>
            <button>COM LEITE</button>
            <button>ALCOÓLICO</button>
            <button>GELADO</button>
        </ButtonCoffe>

        </HeaderCoffeContainne>

    )

}