import styled from "styled-components";

export const Title = styled.h3`
  text-align: center;
  margin: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #9a9a9a;
  color: black;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 0 auto;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-direction: column;
    font-size: 14px;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    align-items: flex-start;
  }
`;

export const IngredientStrong = styled.h4`
  color: black;
  margin: 10px 0;
`;

export const IngredientList = styled.ul`
  padding: 0 20px;
  max-width: 200px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    max-width: 270px;
    margin: 8px;
  }
`;
