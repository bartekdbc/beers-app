import { nanoid } from "@reduxjs/toolkit";
import { IngredientList } from "./styled";

const Malt = ({ malt }) => {
  return (
    <IngredientList>
      {malt.map((maltItem) => (
        <li key={nanoid()}>
          {maltItem.name}: {maltItem.amount.value} {maltItem.amount.unit}
        </li>
      ))}
    </IngredientList>
  );
};

export default Malt;
