import { Icon, Image, Info, Tagline, Title, Wrapper } from "./styled";

const BeerTile = ({ image, name, tagline }) => {
  return (
    <Wrapper>
      <Image src={image} alt="Beer Photo" />
      <Info>
        <Title>{name}</Title>
        <Icon />
        <Tagline>{tagline}</Tagline>
      </Info>
    </Wrapper>
  );
};

export default BeerTile;
