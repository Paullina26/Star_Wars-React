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
  background-color: ${({ theme }) => theme.GlassBackground};
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 3px 10px;
  border: 2px solid ${({ theme }) => theme.ButtonBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadow};
  background: ${({ theme }) => theme.GlassBackground};
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
