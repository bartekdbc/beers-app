export const fetchBeers = async ({ queryKey }) => {
  const [, params] = queryKey;

  const pageParams = new URLSearchParams(params);
  const searchParams = new URLSearchParams(params);

  const APIUrl = `https://api.punkapi.com/v2/beers?${pageParams}&${searchParams}`;

  const response = await fetch(APIUrl);

  if (!response.ok) {
    throw new Error("Failed to load data");
  }

  return await response.json();
};

export const fetchBeerDetails = async (id) => {
  const APIUrl = `https://api.punkapi.com/v2/beers/${id}`;

  const response = await fetch(APIUrl);

  if (!response.ok) {
    throw new Error("Failed to load data");
  }

  return await response.json();
};
