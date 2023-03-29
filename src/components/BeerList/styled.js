import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #eae8e8;
  padding: 30px 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 30px;
  min-height: 100px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #9a9a9a;
  margin: 0;
  padding: 10px;
`;

export const Tagline = styled.h3`
  font-size: 12px;
  color: #9a9a9a;
  margin: 0;
  padding: 10px 0;
  border-top: 1px solid #eae8e8;
`;
