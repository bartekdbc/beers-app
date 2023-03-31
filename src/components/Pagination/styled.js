import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 40px 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin: 20px 0 100px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 5px 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  background-color: ${({ theme }) => theme.color.orange};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 18px;
  }
`;

export const BackwardArrow = styled(Arrow)`
  width: 7px;
  height: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 10px;
    height: 16px;
  }
`;

export const ForwarddArrow = styled(Arrow)`
  width: 7px;
  height: 12px;
  transform: rotate(360deg) scaleX(-1);

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 10px;
    height: 16px;
  }
`;
