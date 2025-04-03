import { CoffeItensContainer, DescContainer, DivCoffeContainer, ImagemContaner, NomeCoffeContainer, SpanPreco, TypeCoffe } from "./styles";
import { CoffeContext } from "../../../../Context/CoffeContext"; 
import { useContext } from "react";
import { InputNumber } from "../Count";



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

  function ShowCoffes(){
    const {filteredCoffes} =useContext(CoffeContext)

    return(

        filteredCoffes.map((coffe) => (
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