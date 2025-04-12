import { MapPinLine } from "@phosphor-icons/react"
import { DivEndereco, DivForm, DivPrincipal, InputBairro, InputCep, InputCidade, InputComp, InputNum, InputRua, InputUf } from "./styles"


export function Endereco() {
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
                    />
                    <InputRua
                        type="text"
                        placeholder="Rua"
                    />
                    <InputNum
                        type="number"
                        placeholder="Numero"
                    />
                    <InputComp
                        type="text"
                        placeholder="Complemento"
                    />
                    <InputBairro
                        type="text"
                        placeholder="Bairro"
                    />
                    <InputCidade
                        type="text"
                        placeholder="Cidade"
                    />
                    <InputUf
                        type="text"
                        placeholder="UF"
                    />
                </DivForm>

            </form>
        </DivPrincipal>
    )
}