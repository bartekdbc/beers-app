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
  border: 11px solid #ddddee;
  border-radius: 50%;
  border-right-color: #7f6ba0;
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
