import { toBeerList } from "../../routes";
import { LogoWrapper, StyledNavLink } from "./styled";

const Header = () => {
  return (
    <LogoWrapper>
      <StyledNavLink to={toBeerList()}>
        <img src="./beer256.png" alt="Beer Icon" />
        <span>Beers</span>
      </StyledNavLink>
    </LogoWrapper>
  );
};

export default Header;
