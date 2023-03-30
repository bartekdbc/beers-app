import styled from "styled-components";
import { ReactComponent as Rhombus } from "../../BeerTile/rhombus.svg";

export const Title = styled.h3`
  text-align: center;
  margin: 0;
  padding: 15px 0;
  border-bottom: 0.5px solid #9a9a9a;
  color: black;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IngredientStrong = styled.h4`
  color: black;
`;

export const IngredientList = styled.ul`
  padding: 0 20px;
  max-width: 200px;
`;
