import { CoffeItensContainer, DescContainer, DivCoffeContainer, ImagemContaner, NomeCoffeContainer, SpanPreco, TypeCoffe } from "./styles";
import Americano from '../../../../assets/coffes/Type=Americano.png';
import Arabe from '../../../../assets/coffes/Type=Árabe.png';
import ComLeite from '../../../../assets/coffes/Type=Café com Leite.png';
import Gelado from '../../../../assets/coffes/Type=Café Gelado.png';
import Cappuccino from '../../../../assets/coffes/Type=Capuccino.png';
import ChocolateQuente from '../../../../assets/coffes/Type=Chocolate Quente.png';
import Cubano from '../../../../assets/coffes/Type=Cubano.png';
import ExpressoCremoso from '../../../../assets/coffes/Type=Expresso Cremoso.png';
import Expresso from '../../../../assets/coffes/Type=Expresso.png';
import Havaiano from '../../../../assets/coffes/Type=Havaiano.png';
import Irlandes from '../../../../assets/coffes/Type=Irlandês.png';
import Latte from '../../../../assets/coffes/Type=Latte.png';
import Macchiato from '../../../../assets/coffes/Type=Macchiato.png';
import Mochaccino from '../../../../assets/coffes/Type=Mochaccino.png';
import { InputNumber } from "../Count";

const coffeData: Record<string, { imagem: string; tipo: TypesCoffe[]; descricao: string, preco: number }> = {
    "Expresso Americano": { preco: 9.90, imagem: Americano, tipo: ["TRADICIONAL"], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    "Árabe": { preco: 9.90, imagem: Arabe, tipo: ["ESPECIAL"], descricao: "Café forte com especiarias" },
    "Café com Leite": { preco: 9.90, imagem: ComLeite, tipo: ["TRADICIONAL", "COM LEITE"], descricao: "Meio a meio de expresso tradicional com leite vaporizado" },
    "Expresso Gelado": { preco: 9.90, imagem: Gelado, tipo: ["TRADICIONAL", "GELADO"], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    "Cappuccino": { preco: 9.90, imagem: Cappuccino, tipo: ["TRADICIONAL", "COM LEITE"], descricao: "Bebida com canela feita de doses iguais de café, leite e espuma" },
    "Chocolate Quente": { preco: 9.90, imagem: ChocolateQuente, tipo: ["ESPECIAL", "COM LEITE"], descricao: "Bebida feita com chocolate dissolvido no leite quente e café" },
    "Cubano": { preco: 9.90, imagem: Cubano, tipo: ["ESPECIAL", "ALCOOLICO", "GELADO"], descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã" },
    "Expresso Cremoso": { preco: 9.90, imagem: ExpressoCremoso, tipo: ["TRADICIONAL"], descricao: "Café expresso tradicional com espuma cremosa" },
    "Expresso Tradicional": { preco: 9.90, imagem: Expresso, tipo: ["TRADICIONAL"], descricao: "O tradicional café feito com água quente e grãos moídos" },
    "Havaiano": { preco: 9.90, imagem: Havaiano, tipo: ["ESPECIAL"], descricao: "Bebida adocicada preparada com café e leite de coco" },
    "Irlandês": { preco: 9.90, imagem: Irlandes, tipo: ["ESPECIAL", "ALCOOLICO"], descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly" },
    "Latte": { preco: 9.90, imagem: Latte, tipo: ["TRADICIONAL", "COM LEITE"], descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa" },
    "Macchiato": { preco: 9.90, imagem: Macchiato, tipo: ["TRADICIONAL", "COM LEITE"], descricao: "Café expresso misturado com um pouco de leite quente e espuma" },
    "Mochaccino": { preco: 9.90, imagem: Mochaccino, tipo: ["TRADICIONAL", "COM LEITE"], descricao: "Café expresso com calda de chocolate, pouco leite e espuma" }

}

interface ItemCoffe {
    nome: string;


}

type TypesCoffe = "TRADICIONAL" | "COM LEITE" | "ESPECIAL" | "ALCOOLICO" | "GELADO";
function getCoffeData(nome: string) {
    return coffeData[nome] || { imagem: "", tipo: ["TRADICIONAL"], descricao: "Descrição não disponível", preco: 0 };
}
export const CoffeItem = ({ nome }: ItemCoffe) => {
    const { imagem, tipo, descricao, preco } = getCoffeData(nome);
    return (
        <DivCoffeContainer>
            <ImagemContaner><img src={imagem} alt={nome} /></ImagemContaner>
            <TypeCoffe>{tipo.map((t) => (
                <span key={t}>{t}</span>
            ))}</TypeCoffe>
            <NomeCoffeContainer>{nome}</NomeCoffeContainer>
            <DescContainer>{descricao}</DescContainer>
            <SpanPreco>R$ {preco.toFixed(2)}<InputNumber/></SpanPreco>
        </DivCoffeContainer>
    )
}


export function CardCoffe() {

    return (
        <CoffeItensContainer>
            <CoffeItem
                nome="Expresso Tradicional"
            />
            <CoffeItem
                nome="Expresso Americano"
            />
            <CoffeItem
                nome="Expresso Cremoso"
            />
            <CoffeItem
                nome="Expresso Gelado"
            />
            <CoffeItem
                nome="Café com Leite"
            />
            <CoffeItem
                nome="Latte"
            />
            <CoffeItem
                nome="Cappuccino"
            />
            <CoffeItem
                nome="Macchiato"
            />
            <CoffeItem
                nome="Mochaccino"
            />
            <CoffeItem
                nome="Chocolate Quente"
            />
            <CoffeItem
                nome="Cubano"
            />
            <CoffeItem
                nome="Havaiano"
            />
            <CoffeItem
                nome="Árabe"
            />
            <CoffeItem
                nome="Irlandês"
            />
        </CoffeItensContainer>


    )
}