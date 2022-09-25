import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.spacing.md};

  &:hover {
    opacity: 0.7;
  }
`;
