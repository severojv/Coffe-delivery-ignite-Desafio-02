import { MapPinLine } from "@phosphor-icons/react"
import { DivEndereco, DivForm, DivPrincipal, InputBairro, InputCep, InputCidade, InputComp, InputNum, InputRua, InputUf } from "./styles"
import { useContext, useState } from "react";
import { CoffeContext } from "../../../Context/CoffeContext";


export function Endereco() {

    const { endereco, setEndereco } = useContext(CoffeContext);

    const [cep, setCep] = useState('');

    const buscarEndereco = async (event: React.FormEvent) => {
        event.preventDefault();
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resposta.json();
        setEndereco(dados);
    };

    function handleNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEndereco((prevEndereco) => ({
            ...prevEndereco, 
            numero: event.target.value, 
        }));
    };

    function hadleComplementoChange(event: React.ChangeEvent<HTMLInputElement>){
        setEndereco((prevEndereco) => ({
            ...prevEndereco, 
            complemento: event.target.value,  
        }));
    };

    return (
        <DivPrincipal>
            <h1>Complete seu Pedido</h1>

            <DivEndereco>
                <MapPinLine size={22} />
                <div>

                    <span>Endereço de entrega</span>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </DivEndereco>

            <form >
                <DivForm>

                    <InputCep
                        type="text"
                        placeholder="CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <button onClick={buscarEndereco}>Buscar</button>

                    <InputRua
                        type="text"
                        placeholder="Rua"
                        value={endereco.logradouro}
                    />
                    <InputNum
                        type="number"
                        placeholder="Numero"
                        onChange={handleNumberChange}

                    />
                    <InputComp
                        type="text"
                        placeholder="Complemento"
                        onChange={hadleComplementoChange}
                    />
                    <InputBairro
                        type="text"
                        placeholder="Bairro"
                        value={endereco.bairro}
                    />
                    <InputCidade
                        type="text"
                        placeholder="Cidade"
                        value={endereco.localidade}
                    />
                    <InputUf
                        type="text"
                        placeholder="UF"
                        value={endereco.uf}
                    />
                </DivForm>
            </form>
        </DivPrincipal>
    )
}