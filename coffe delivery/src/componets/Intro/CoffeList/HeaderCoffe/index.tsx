import { ButtonCoffe, HeaderCoffeContainne } from "./styles";
import { CoffeContext } from "../../../../Context/CoffeContext"; 
import { useContext } from "react";

export function HeaderCoffe(){
    const {filterCoffes} =useContext(CoffeContext)
    return(
        <HeaderCoffeContainne>

        <div>
            <h1>Nossos Cafés</h1>
        </div>

        <ButtonCoffe>
            <button onClick={() => filterCoffes("TODOS")}
            >
                TODOS
            </button>
            <button onClick={() => filterCoffes("TRADICIONAL")}
            >
                TRADICIONAL
            </button>
            <button onClick={() => filterCoffes("ESPECIAL")}
            >
                ESPECIAL
            </button>
            <button onClick={() => filterCoffes("COM LEITE")}
            >
                COM LEITE
            </button>
            <button onClick={() => filterCoffes("ALCOOLICO")}
            >
                ALCOÓLICO
            </button>
            <button onClick={() => filterCoffes("GELADO")}
            >
                GELADO
            </button>

        </ButtonCoffe>

        </HeaderCoffeContainne>

    )

}