import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchBeerDetails } from "../../beersAPI";
import ErrorPage from "../ErrorPage";
import Loader from "../Loader";
import PausedPage from "../PausedPage";
import Ingredients from "./Ingredients";
import {
  Description,
  DetailedInfo,
  DetailedInfoWrapper,
  Details,
  Image,
  Info,
  IngredientsWrapper,
  Name,
  SmallInfo,
  Strong,
  Tagline,
  Wrapper,
} from "./styled";

const BeerPage = () => {
  const { id } = useParams();

  const {
    data: beer,
    isLoading,
    isError,
    isPaused,
  } = useQuery(["beer", { id }], () => fetchBeerDetails(id));

  return (
    <>
      {beer ? (
        <>
          <Wrapper>
            <Details>
              <Image src={beer[0].image_url} alt="Beer Pic" />
              <Info>
                <Name>{beer[0].name}</Name>
                <Tagline>{beer[0].tagline}</Tagline>
                <span>
                  <Strong>Description:</Strong>
                  <Description>{beer[0].description}</Description>
                </span>
                <DetailedInfo>
                  <DetailedInfoWrapper>
                    <Strong>ABV:</Strong>
                    <SmallInfo>{beer[0].abv}</SmallInfo>
                  </DetailedInfoWrapper>
                  <DetailedInfoWrapper>
                    <Strong>IBU:</Strong>
                    <SmallInfo>{beer[0].ibu}</SmallInfo>
                  </DetailedInfoWrapper>
                </DetailedInfo>
              </Info>
            </Details>
            <IngredientsWrapper>
              <Ingredients
                malt={beer[0].ingredients.malt}
                hops={beer[0].ingredients.hops}
                yeast={beer[0].ingredients.yeast}
              />
            </IngredientsWrapper>
          </Wrapper>
        </>
      ) : isPaused ? (
        <PausedPage />
      ) : isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorPage />
      ) : (
        <></>
      )}
    </>
  );
};

export default BeerPage;
