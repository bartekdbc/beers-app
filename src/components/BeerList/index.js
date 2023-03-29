import { useEffect, useState } from "react";
import BeerTile from "../BeerTile";
import { Container } from "../Container";
import Loader from "../Loader";
import Pagination from "../Pagination";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ErrorPage from "../ErrorPage";
import PausedPage from "../PausedPage";

const perPage = 12;

const getKey = (page) => [
  "beers",
  {
    page,
    per_page: perPage,
  },
];

const BeerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(getKey(currentPage + 1));
  }, [currentPage, queryClient]);

  const { isLoading, isError, data, isPaused } = useQuery(getKey(currentPage));

  return (
    <>
      {data ? (
        <>
          <Container>
            {data.map((beer) => (
              <BeerTile
                key={beer.id}
                image={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                description={beer.description}
                abv={beer.abv}
                ibu={beer.ibu}
              />
            ))}
          </Container>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
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

export default BeerList;
