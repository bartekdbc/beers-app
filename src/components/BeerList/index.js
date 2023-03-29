import { Image, Tagline, Title, Wrapper } from "./styled";

const BeerList = ({ image, name, tagline }) => {
  return (
    <Wrapper>
      <Image src={image} alt="" />
      <Title>{name}</Title>
      <Tagline>{tagline}</Tagline>
    </Wrapper>
  );
};

export default BeerList;
