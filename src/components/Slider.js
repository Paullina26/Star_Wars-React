import styled from 'styled-components';

export const WrapperStyle = styled.div`
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export const Button = styled.button`
  height: 35px;
  padding: 0 10px;
  border: 2px solid ${({ theme }) => theme.ButtonBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadow};
  border-radius: 10px;
  display: inline-block;
  margin: 0px 35px 20px 35px;
  color: ${({ theme }) => theme.BasicFont};
  font-size: 20px;
  background-color: ${({ theme }) => theme.ButtonBacgraund};
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.ButtonBorderHover};
    box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadowHover};
    transition: 0.2s linear;
  }
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
  background-color: ${({ theme }) => theme.ButtonBacgraund};
`;

export const Slider = () => {
  return (
    <WrapperStyle>
      <Button>Back</Button>
      <Counter>1</Counter>
      <Button>Next</Button>
    </WrapperStyle>
  );
};

export default Slider;
