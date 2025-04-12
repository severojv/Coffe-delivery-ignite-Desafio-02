import styled, { css } from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

interface PaymentOptionProps {
  selected: boolean;
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  background: #E6E5E5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #403937;
  cursor: pointer;

  svg {
    color: #8047F8;
  }

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid #8047F8;
      background: #EBE5F9;
    `}

  &:hover {
    background: #D7D5D5;
    transition: 0.2s;
  }
`;
