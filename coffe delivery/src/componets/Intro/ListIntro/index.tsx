import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { BenefitContainer, BenefitsContainer, IconWrapper } from "./styles";
import { JSX } from "react";
interface IBenefitItem {
    icon: JSX.Element;
    text: string;
    color: string;
  }

  export const BenefitItem = ({ icon, text, color }:IBenefitItem) => {
  return (
    <BenefitContainer>
      <IconWrapper color={color}>{icon}</IconWrapper>
      <span>{text}</span>
    </BenefitContainer>
  );
};

export function BenefitsList() {
  return (
    <BenefitsContainer>
      <BenefitItem
        icon={<ShoppingCart size={20} weight="fill" />}
        text="Compra simples e segura"
        color="#C47F17"
      />
      <BenefitItem
        icon={<Timer size={20} weight="fill" />}
        text="Entrega rápida e rastreada"
        color="#DBAC2C"
      />
      <BenefitItem
        icon={<Package size={20} weight="fill" />}
        text="Embalagem mantém o café intacto"
        color="#403937"
      />
      <BenefitItem
        icon={<Coffee size={20} weight="fill" />}
        text="O café chega fresquinho até você"
        color="#8047F8"
      />
    </BenefitsContainer>
  );
}