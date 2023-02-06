import styled from 'styled-components';

export const WrapperStyle = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: inline-block;
  width: 100px;
  margin-bottom: 20px;
`;

export const Counter = styled.button`
  width: 35px;
  height: 35px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.ButtonBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadow};
  border-radius: 10px;
  display: inline-block;
  color: ${({ theme }) => theme.BasicFont};
  font-size: 20px;
  background-color: ${({ theme }) => theme.GlassBacgraund};
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 3px 10px;
  border: 2px solid ${({ theme }) => theme.ButtonBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadow};
  background: ${({ theme }) => theme.GlassBacgraund};
  border-radius: 10px;
  display: inline-block;
  color: ${({ theme }) => theme.BasicFont};
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.ButtonBorderHover};
    box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadowHover};
    transition: 0.2s linear;
  }
`;

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
