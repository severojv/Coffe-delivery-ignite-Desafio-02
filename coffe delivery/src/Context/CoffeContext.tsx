import React, { createContext, useState } from "react";
import Americano from '../assets/coffes/Type=Americano.png';
import Arabe from '../assets/coffes/Type=Árabe.png';
import ComLeite from '../assets/coffes/Type=Café com Leite.png';
import Gelado from '../assets/coffes/Type=Café Gelado.png';
import Cappuccino from '../assets/coffes/Type=Capuccino.png';
import ChocolateQuente from '../assets/coffes/Type=Chocolate Quente.png';
import Cubano from '../assets/coffes/Type=Cubano.png';
import ExpressoCremoso from '../assets/coffes/Type=Expresso Cremoso.png';
import Expresso from '../assets/coffes/Type=Expresso.png';
import Havaiano from '../assets/coffes/Type=Havaiano.png';
import Irlandes from '../assets/coffes/Type=Irlandês.png';
import Latte from '../assets/coffes/Type=Latte.png';
import Macchiato from '../assets/coffes/Type=Macchiato.png';
import Mochaccino from '../assets/coffes/Type=Mochaccino.png'
type TypesCoffe = "TRADICIONAL" | "COM LEITE" | "ESPECIAL" | "ALCOOLICO" | "GELADO";


interface CoffeContextType {
    filteredCoffes: Coffe[];
    filterCoffes: (tipocofee: TypesCoffe|"TODOS") => void
    addToCart:(coffe:Coffe)=>void;
    cart:Coffe[];
    total:number;
    totalItems:number

}

export interface Coffe {
    nome: string;
    imagem: string;
    tipo: TypesCoffe[];
    descricao: string;
    preco: number;
    qnt?:number;
}

export const CoffeContext = createContext({} as CoffeContextType)
const coffes : Coffe[]=[
    {qnt:1, nome: "Expresso Americano", preco: 9.90, imagem: Americano, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    {qnt:1,nome: "Árabe", preco: 9.90, imagem: Arabe, tipo: ["ESPECIAL"]as TypesCoffe[], descricao: "Café forte com especiarias" },
    {qnt:1, nome: "Café com Leite", preco: 9.90, imagem: ComLeite, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Meio a meio de expresso tradicional com leite vaporizado" },
    {qnt:1, nome: "Expresso Gelado", preco: 9.90, imagem: Gelado, tipo: ["TRADICIONAL", "GELADO"]as TypesCoffe[], descricao: "Bebida preparada com café expresso e cubos de gelo" },
    {qnt:1, nome: "Cappuccino", preco: 9.90, imagem: Cappuccino, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Bebida com canela feita de doses iguais de café, leite e espuma" },
    {qnt:1, nome: "Chocolate Quente", preco: 9.90, imagem: ChocolateQuente, tipo: ["ESPECIAL", "COM LEITE"]as TypesCoffe[], descricao: "Bebida feita com chocolate dissolvido no leite quente e café" },
    {qnt:1, nome: "Cubano", preco: 9.90, imagem: Cubano, tipo: ["ESPECIAL", "ALCOOLICO", "GELADO"]as TypesCoffe[], descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã" },
    {qnt:1, nome: "Expresso Cremoso", preco: 9.90, imagem: ExpressoCremoso, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "Café expresso tradicional com espuma cremosa" },
    {qnt:1, nome: "Expresso Tradicional", preco: 9.90, imagem: Expresso, tipo: ["TRADICIONAL"]as TypesCoffe[], descricao: "O tradicional café feito com água quente e grãos moídos" },
    {qnt:1, nome: "Havaiano", preco: 9.90, imagem: Havaiano, tipo: ["ESPECIAL"]as TypesCoffe[], descricao: "Bebida adocicada preparada com café e leite de coco" },
    { qnt:1,nome: "Irlandês", preco: 9.90, imagem: Irlandes, tipo: ["ESPECIAL", "ALCOOLICO"]as TypesCoffe[], descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly" },
    {qnt:1, nome: "Latte", preco: 9.90, imagem: Latte, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa" },
    {qnt:1, nome: "Macchiato", preco: 9.90, imagem: Macchiato, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Café expresso misturado com um pouco de leite quente e espuma" },
    {qnt:1, nome: "Mochaccino", preco: 9.90, imagem: Mochaccino, tipo: ["TRADICIONAL", "COM LEITE"]as TypesCoffe[], descricao: "Café expresso com calda de chocolate, pouco leite e espuma" }
];

export function CoffeProvider({ children }: { children: React.ReactNode }) {

    const [filteredCoffes, setFilteredCoffes] = useState<Coffe[]>(coffes);
    const [cart,setCart] =useState<Coffe[]>([])
    const total = cart.reduce((sum, coffe) => sum + coffe.preco * (coffe.qnt ?? 1), 0);
    const totalItems = cart.reduce((sum, coffe) => sum + (coffe.qnt ?? 1), 0);

function filterCoffes(tipocofee: TypesCoffe|"TODOS") {
    if (tipocofee === "TODOS") {
        setFilteredCoffes(coffes); // 🔹 Exibe todos os cafés
    } else {
        setFilteredCoffes(coffes.filter(coffe => coffe.tipo.includes(tipocofee)));
    }
    }

     function addToCart(newCart:Coffe){
        setCart(prevCart=> {
                const existe =prevCart.find(c=> c.nome===newCart.nome );
                if(existe){
                    return prevCart.map(c=>c.nome==newCart.nome ?{...c,qnt:(c.qnt||0)+(newCart.qnt||1)}:c)
                }else{
                    return [...prevCart,newCart]
                }

            }
        )
    }


    return (
        <CoffeContext.Provider value={{ filteredCoffes, filterCoffes,addToCart,cart ,total,totalItems}}>
            {children}
        </CoffeContext.Provider>
    );
}
