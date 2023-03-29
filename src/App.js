import { useEffect, useState } from "react";
import BeerList from "./components/BeerList";
import { APIUrl } from "./beersAPI";
import { Container } from "./components/Container";
import Header from "./components/Header";

function App() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const response = await fetch(APIUrl);
    const data = await response.json();
    setBeers(data);
    console.log(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
