import {
  BackwardArrow,
  Button,
  ForwarddArrow,
  PageNumber,
  Wrapper,
} from "./styled";

const Pagination = ({ currentPage, setCurrentPage }) => {
  const backwardButtonDisabled = currentPage === 1;
  const forwardButtonDisabled = currentPage === 28;

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Wrapper>
      <Button onClick={handlePrevPage} disabled={backwardButtonDisabled}>
        <BackwardArrow />
      </Button>
      <PageNumber>{currentPage}</PageNumber>
      <Button onClick={handleNextPage} disabled={forwardButtonDisabled}>
        <ForwarddArrow />
      </Button>
    </Wrapper>
  );
};

export default Pagination;
