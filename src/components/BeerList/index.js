import { useEffect, useState } from "react";
import BeerTile from "../BeerTile";
import { Container } from "../Container";
import Loader from "../Loader";
import Pagination from "../Pagination";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (currentPage) => {
    setLoading(false);
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=1&per_page=12`
    );
    const data = await response.json();
    setBeers(data);
    console.log(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(fetchData, 2000);
  }, [currentPage]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {beers.map((beer) => (
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
      )}
    </>
  );
};

export default BeerList;
