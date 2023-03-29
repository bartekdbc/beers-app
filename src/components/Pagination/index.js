import {
  BackwardArrow,
  Button,
  ForwarddArrow,
  PageNumber,
  Wrapper,
} from "./styled";

const Pagination = () => {
  return (
    <Wrapper>
      <Button>
        <BackwardArrow />
      </Button>
      <PageNumber>2</PageNumber>
      <Button>
        <ForwarddArrow />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
