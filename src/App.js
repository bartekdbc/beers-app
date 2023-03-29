import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import { APIUrl } from "./beersAPI";
import { Container } from "./components/Container";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

function App() {
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBeers = async () => {
    setLoading(false);
    const response = await fetch(APIUrl);
    const data = await response.json();
    setBeers(data);
    console.log(data);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(getBeers, 2000);
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {beers.map((beer) => (
              <BeerList
                key={beer.id}
                image={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
              />
            ))}
          </Container>
          <Pagination />
        </>
      )}
    </>
  );
}

export default App;
