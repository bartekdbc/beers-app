import { ButtonLink, ErrorIcon, ErrorText, Wrapper } from "./styled";

const ErrorPage = () => (
  <Wrapper>
    <ErrorIcon />
    <ErrorText>Ooops! Something went wrong... </ErrorText>
    <ButtonLink to={"/"}>Back to home page</ButtonLink>
  </Wrapper>
);

export default ErrorPage;
