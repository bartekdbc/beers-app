import { nanoid } from "@reduxjs/toolkit";
import { IngredientList } from "./styled";

const Hops = ({ hops }) => {
  return (
    <IngredientList>
      {hops.map((hopsItem) => (
        <li key={nanoid()}>
          {hopsItem.name}: {hopsItem.amount.value} {hopsItem.amount.unit}
          &nbsp;(add: {hopsItem.add}/ attribute: {hopsItem.attribute})
        </li>
      ))}
    </IngredientList>
  );
};

export default Hops;
