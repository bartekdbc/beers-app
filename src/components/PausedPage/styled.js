import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Error } from "../ErrorPage/error.svg";

export const Wrapper = styled.div`
  margin-top: 80px;
  text-align: center;
  color: #9a9a9a;
`;

export const ErrorIcon = styled(Error)`
  width: 80px;
  height: 80px;
  margin: 0 0 32px;
`;

export const ErrorText = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;
`;

export const ButtonLink = styled(Link)`
  color: white;
  background-color: #7f6ba0;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  padding: 16px 24px;
  border-radius: 5px;
  cursor: pointer;
`;
