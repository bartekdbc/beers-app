import { nanoid } from "@reduxjs/toolkit";
import { IngredientItem, IngredientList } from "./styled";

const Malt = ({ malt }) => {
  return (
    <IngredientList>
      {malt.map((maltItem) => (
        <IngredientItem key={nanoid()}>
          {maltItem.name}: {maltItem.amount.value} {maltItem.amount.unit}
        </IngredientItem>
      ))}
    </IngredientList>
  );
};

export default Malt;
