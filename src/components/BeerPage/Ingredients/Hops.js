import { IngredientList } from "./styled";

const Hops = ({ hops }) => {
  return (
    <IngredientList>
      {hops.map((hopsItem) => (
        <li key={hopsItem.name}>
          {hopsItem.name}: {hopsItem.amount.value} {hopsItem.amount.unit}
        </li>
      ))}
    </IngredientList>
  );
};

export default Hops;
