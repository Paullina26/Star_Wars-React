import styled from 'styled-components';
import { Button } from './Button';

export const WrapperStyle = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
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

export const Pagination = () => {
  return (
    <WrapperStyle>
      <Button>Back</Button>
      <Counter>1</Counter>
      <Button>Next</Button>
    </WrapperStyle>
  );
};

export default Pagination;
