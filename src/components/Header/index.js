import { toBeerList } from "../../routes";
import { LogoWrapper, StyledNavLink } from "./styled";

const Header = () => {
  return (
    <LogoWrapper>
      <StyledNavLink to={toBeerList()}>Beers</StyledNavLink>
    </LogoWrapper>
  );
};

export default Header;
