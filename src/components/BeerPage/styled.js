import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-height: 105vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 0 20px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.mercury};
  padding: 20px 50px;
  margin-top: 50px;
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    padding: 20px 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Image = styled.img`
  max-height: 300px;
  margin: auto;
  object-fit: cover;
  margin: 10px 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    max-height: 250px;
    margin: 10px 30px 10px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    margin: 10px 0px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

export const Tagline = styled.h3`
  margin: 18px 0 30px;
  font-style: italic;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  max-width: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 16px;
  }
`;

export const SmallInfo = styled.p`
  margin: 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}px) {
    font-size: 14px;
  }
`;

export const IngredientsWrapper = styled.div`
  padding: 20px 50px;
  margin: 30px 0;
  box-shadow: rgba(186, 199, 213, 0.5) 0px 4px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
