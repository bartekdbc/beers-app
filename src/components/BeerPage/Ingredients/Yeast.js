import { IngredientItem, IngredientList } from "./styled";

const Yeast = ({ yeast }) => {
  return (
    <IngredientList>
      <IngredientItem>{yeast}</IngredientItem>
    </IngredientList>
  );
};

export default Yeast;
