import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const handlePrevPage = () => {
    const updatedPage = currentPage - 1;
    setCurrentPage(updatedPage);
    history.push(`/beers/${updatedPage}`);
  };

  const handleNextPage = () => {
    const updatedPage = currentPage + 1;
    setCurrentPage(updatedPage);
    history.push(`/beers/${updatedPage}`);
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
