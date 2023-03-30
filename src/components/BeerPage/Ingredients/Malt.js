import { IngredientList } from "./styled";

const Malt = ({ malt }) => {
  return (
    <IngredientList>
      {malt.map((maltItem) => (
        <li key={maltItem.name}>
          {maltItem.name}: {maltItem.amount.value} {maltItem.amount.unit}
        </li>
      ))}
    </IngredientList>
  );
};

export default Malt;
