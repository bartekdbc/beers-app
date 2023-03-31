import { nanoid } from "@reduxjs/toolkit";
import { IngredientItem, IngredientList } from "./styled";

const Hops = ({ hops }) => {
  return (
    <IngredientList>
      {hops.map((hopsItem) => (
        <IngredientItem key={nanoid()}>
          {hopsItem.name}: {hopsItem.amount.value} {hopsItem.amount.unit}
          &nbsp;(add: {hopsItem.add}/ attribute: {hopsItem.attribute})
        </IngredientItem>
      ))}
    </IngredientList>
  );
};

export default Hops;
