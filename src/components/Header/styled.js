import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  background-image: linear-gradient(to right, #7f6ba0, #7e92b5);
  border-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 12vh;
    background: ${({ theme }) => theme.color.white};
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.orange};
  margin-top: -40px;
  font-size: 36px;
  font-weight: 600;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: -60px;
  }
`;

export const BeerIcon = styled.img`
  max-height: 60px;
  padding: 2px;
`;
