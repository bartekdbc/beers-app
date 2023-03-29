import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-content: center;
`;
