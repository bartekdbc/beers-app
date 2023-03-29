import styled from "styled-components";
import { ReactComponent as Rhombus } from "./rhombus.svg";

export const Wrapper = styled.div`
  border: 1px solid #eae8e8;
  padding: 20px 20px 5px 20px;
  margin: 20px;
  display: grid;
  grid-template-rows: minmax(110px, 1fr) 1fr;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 30px;
  min-height: 100px;
  margin: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #9a9a9a;
  margin: 0;
  padding: 10px;
  text-size-adjust: auto;
`;

export const Tagline = styled.h3`
  font-size: 12px;
  color: #9a9a9a;
  margin: 0;
  padding: 10px 0;
  border-top: 1px solid #eae8e8;
`;

export const Icon = styled(Rhombus)`
  width: 10px;
  height: 10px;
  margin-bottom: -5px;
  position: sticky;
`;
