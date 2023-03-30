import Hops from "./Hops";
import Malt from "./Malt";
import { Ingredient, IngredientStrong, Title, Wrapper } from "./styled";
import Yeast from "./Yeast";

const Ingredients = ({ malt, hops, yeast }) => {
  return (
    <>
      <Title>Ingredients</Title>
      <Wrapper>
        <Ingredient>
          <IngredientStrong>Malt</IngredientStrong>
          <Malt malt={malt} />
        </Ingredient>
        <Ingredient>
          <IngredientStrong>Hops</IngredientStrong>
          <Hops hops={hops} />
        </Ingredient>
        <Ingredient>
          <IngredientStrong>Yeast</IngredientStrong>
          <Yeast yeast={yeast} />
        </Ingredient>
      </Wrapper>
    </>
  );
};

export default Ingredients;
