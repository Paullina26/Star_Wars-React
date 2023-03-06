import styled from 'styled-components';

export const WrapperStyle = styled.div`
  text-align: center;
`;

export const LogoTitle = styled.h1`
  font-variant: small-caps;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.LogoFont};
  margin: 10px auto;
  font-size: 35px;
  font-weight: bold;
`;
