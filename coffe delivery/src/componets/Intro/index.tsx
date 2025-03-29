import { BenefitsList } from "./ListIntro";
import {  HIntroContainer, IMG, IntroContainer, IntroWrapper, TextContents } from "./styles";
import imagem from '../../assets/Imagem.png'

export function Intro() {
    return (
        <IntroWrapper>

            <TextContents >

                <HIntroContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                </HIntroContainer>
                <IntroContainer>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </IntroContainer>
                <BenefitsList></BenefitsList>

            </TextContents >
            <IMG>
                <img src={imagem} alt="" />
            </IMG>
        </IntroWrapper>


    )
}