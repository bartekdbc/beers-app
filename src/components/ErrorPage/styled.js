import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const Wrapper = styled.div`
  margin-top: 80px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    margin-top: 50px;
  }
`;

export const ErrorIcon = styled(Error)`
  width: 80px;
  height: 80px;
  margin: 0 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    width: 40px;
    height: 40px;
    margin: 0 0 12px;
  }
`;

export const ErrorText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 20px;
  }
`;

export const ButtonLink = styled(Link)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.violet};
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  padding: 16px 24px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`;
