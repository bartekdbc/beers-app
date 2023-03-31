import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-height: 100vh;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.mercury};
  padding: 20px 50px;
  margin-top: 50px;
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
`;

export const Image = styled.img`
  max-height: 300px;
  margin: auto;
  object-fit: cover;
  margin: 10px 40px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.black};
`;

export const Tagline = styled.h3`
  margin: 18px 0 30px;
  font-style: italic;
  color: ${({ theme }) => theme.color.black};
`;

export const Description = styled.p`
  max-width: 500px;
`;

export const DetailedInfo = styled.div`
  display: flex;
`;

export const DetailedInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const Strong = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

export const SmallInfo = styled.p`
  margin: 0 8px;
`;

export const IngredientsWrapper = styled.div`
  padding: 20px 50px;
  margin-top: 30px;
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;
`;
