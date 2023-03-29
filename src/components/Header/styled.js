import styled from "styled-components";

export const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 25vh;
  background-image: linear-gradient(to right, #7f6ba0, #7e92b5);
  border-style: none;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 12vh;
    background: white;
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }
`;

export const LogoTitle = styled.h1`
  margin: 0;
  color: #fc9f15;
  margin-top: 60px;
`;
