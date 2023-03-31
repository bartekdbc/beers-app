import { nanoid } from "@reduxjs/toolkit";
import { IngredientList } from "./styled";

const Hops = ({ hops }) => {
  return (
    <IngredientList>
      {hops.map((hopsItem) => (
        <li key={nanoid()}>
          {hopsItem.name}: {hopsItem.amount.value} {hopsItem.amount.unit}
        </li>
      ))}
    </IngredientList>
  );
};

export default Hops;
