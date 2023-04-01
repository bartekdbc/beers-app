export const fetchBeers = async ({ queryKey }) => {
  const [, params] = queryKey;

  const pageParams = new URLSearchParams();
  const searchParams = new URLSearchParams();

  if (params.page) {
    pageParams.set("page", params.page);
  }
  if (params.per_page) {
    pageParams.set("per_page", params.per_page);
  }

  for (const [key, value] of Object.entries(params)) {
    if (key !== "page" && key !== "per_page") {
      searchParams.set(key, value);
    }
  }

  const APIUrl = `https://api.punkapi.com/v2/beers${
    pageParams.toString() ? `?${pageParams.toString()}` : ""
  }${searchParams.toString() ? `&${searchParams.toString()}` : ""}`;

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
