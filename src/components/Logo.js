import styled from 'styled-components';

const WrapperStyle = styled.div`
  text-align: center;
`;

const LogoTitle = styled.h1`
  font-variant: small-caps;
  padding-bottom: 40px;
  color: ${({ theme }) => theme.LogoFont};
  margin: 10px auto;
  font-size: 35px;
  font-weight: bold;
  /* border-bottom: 1px solid ${({ theme }) => theme.LogoBorderBottom}; */
`;

export const Logo = () => {
  return (
    <WrapperStyle>
      <LogoTitle>Star Wars</LogoTitle>
    </WrapperStyle>
  );
};

export default Logo;
