import styled from "styled-components";
import { ReactComponent as Rhombus } from "./rhombus.svg";

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.color.mercury};
  padding: 20px 20px 5px 20px;
  margin: 20px;
  display: grid;
  grid-template-rows: minmax(120px, 1fr) 1fr;
  justify-content: center;
  padding: 16px;
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  max-width: 30px;
  min-height: 100px;
  margin: auto;
  object-fit: cover;
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
  color: ${({ theme }) => theme.color.gray};
  margin: 0;
  padding: 10px;
`;

export const Tagline = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
  margin: 0;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.color.mercury};
`;

export const Icon = styled(Rhombus)`
  width: 10px;
  height: 10px;
  margin-bottom: -5px;
  position: sticky;
`;
