import { WrapperStyle, Wrapper, Counter, Button } from 'styles/Pagination.style';

export const Pagination = props => {
  return (
    <WrapperStyle>
      <Wrapper>{!props.isFirstPage && <Button onClick={props.backPage}>Back</Button>}</Wrapper>
      <Wrapper>
        <Counter>{props.currentPage}</Counter>
      </Wrapper>
      <Wrapper>{!props.isLastPage && <Button onClick={props.nextPage}>Next</Button>}</Wrapper>
    </WrapperStyle>
  );
};

export default Pagination;
