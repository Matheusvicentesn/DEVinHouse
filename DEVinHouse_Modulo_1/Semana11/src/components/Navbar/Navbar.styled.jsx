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


