import styled from 'styled-components';

export const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.WrapperBacgraund};
  /* border: 2px solid ${({ theme }) => theme.WrapperBorder}; */
  /* box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.WrapperBorderShadow}; */
  color: ${({ theme }) => theme.BasicFont};
  /* border-radius: 0px 10px 10px 0px; */
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 15px;
  margin-left: 15px;
  padding: 20px;
`;
