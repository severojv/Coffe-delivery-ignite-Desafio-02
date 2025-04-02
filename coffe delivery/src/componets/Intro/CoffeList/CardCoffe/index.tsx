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

const coffes = [
    { nome: "Expresso Americano", preco: 9.90, imagem: Americano, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    { nome: "Árabe", preco: 9.90, imagem: Arabe, tipo: ["ESPECIAL"]as TypesCoffe[], descricao: "Café forte com especiarias" },
    { nome: "Café com Leite", preco: 9.90, imagem: ComLeite, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Meio a meio de expresso tradicional com leite vaporizado" },
    { nome: "Expresso Gelado", preco: 9.90, imagem: Gelado, tipo: ["TRADICIONAL", "GELADO"]as TypesCoffe[], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    { nome: "Cappuccino", preco: 9.90, imagem: Cappuccino, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Bebida com canela feita de doses iguais de café, leite e espuma" },
    { nome: "Chocolate Quente", preco: 9.90, imagem: ChocolateQuente, tipo: ["ESPECIAL", "COM LEITE"]as TypesCoffe[], descricao: "Bebida feita com chocolate dissolvido no leite quente e café" },
    { nome: "Cubano", preco: 9.90, imagem: Cubano, tipo: ["ESPECIAL", "ALCOOLICO", "GELADO"]as TypesCoffe[], descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã" },
    { nome: "Expresso Cremoso", preco: 9.90, imagem: ExpressoCremoso, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "Café expresso tradicional com espuma cremosa" },
    { nome: "Expresso Tradicional", preco: 9.90, imagem: Expresso, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "O tradicional café feito com água quente e grãos moídos" },
    { nome: "Havaiano", preco: 9.90, imagem: Havaiano, tipo: ["ESPECIAL"]as TypesCoffe[], descricao: "Bebida adocicada preparada com café e leite de coco" },
    { nome: "Irlandês", preco: 9.90, imagem: Irlandes, tipo: ["ESPECIAL", "ALCOOLICO"]as TypesCoffe[], descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly" },
    { nome: "Latte", preco: 9.90, imagem: Latte, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa" },
    { nome: "Macchiato", preco: 9.90, imagem: Macchiato, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Café expresso misturado com um pouco de leite quente e espuma" },
    { nome: "Mochaccino", preco: 9.90, imagem: Mochaccino, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Café expresso com calda de chocolate, pouco leite e espuma" }
];

interface Coffe {
    nome: string;
    imagem: string;
    tipo: TypesCoffe[];
    descricao: string;
    preco: number;
}

type TypesCoffe = "TRADICIONAL" | "COM LEITE" | "ESPECIAL" | "ALCOOLICO" | "GELADO";

export const CoffeItem = ({ coffe }: { coffe: Coffe }) => {
    return (
        <DivCoffeContainer>
            <ImagemContaner><img src={coffe.imagem} alt={coffe.nome} /></ImagemContaner>
            <TypeCoffe>{coffe.tipo.map((t) => (
                <span key={t}>{t}</span>
            ))}</TypeCoffe>
            <NomeCoffeContainer>{coffe.nome}</NomeCoffeContainer>
            <DescContainer>{coffe.descricao}</DescContainer>
            <SpanPreco>R$ {coffe.preco.toFixed(2)}<InputNumber /></SpanPreco>
        </DivCoffeContainer>
    )
}

 export function ShowCoffes(){
    return(

        coffes.map((coffe) => (
            <CoffeItem key={coffe.nome} coffe={coffe} />
        ))
    )
 }
export function CardCoffe() {

    return (
        <CoffeItensContainer>
            <ShowCoffes/>
        </CoffeItensContainer>


    )
}