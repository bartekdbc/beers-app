export const toBeerList = () => "/beers";

export const toBeerPage = ({ id } = { id: ":id" }) => `/beers/details/${id}`;
