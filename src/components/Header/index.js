import { toBeerList } from "../../assets/routes";
import { BeerIcon, LogoWrapper, StyledNavLink } from "./styled";

const Header = () => {
  return (
    <LogoWrapper>
      <StyledNavLink to={toBeerList()}>
        <BeerIcon
          src="https://raw.githubusercontent.com/bartekdbc/beers-app/main/src/components/Header/beer256.png"
          alt="Beer Icon"
        />
        <span>Beers</span>
      </StyledNavLink>
    </LogoWrapper>
  );
};

export default Header;
