import styled from "styled-components";

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 8px;
`;

export const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
`;