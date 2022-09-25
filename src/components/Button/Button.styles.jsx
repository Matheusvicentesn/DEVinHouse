import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.sm};
  &:hover {
    opacity: 0.7;
  }
`;
