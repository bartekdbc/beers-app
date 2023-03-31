import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  margin: 120px auto 24px;
  width: 91px;
  height: 91px;
  border: 11px solid ${({ theme }) => theme.color.snuff};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.color.violet};
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
