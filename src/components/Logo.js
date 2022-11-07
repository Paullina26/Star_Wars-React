import styled from 'styled-components';

const WrapperStyle = styled.div`
  /* min-height: 200px;
  min-width: 200px; */
`;

const LogoTitle = styled.h1`
  color: ${({ theme }) => theme.fontLogo};
  /* padding: 10px;
  margin: 20px; */
  margin: 10px auto;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.borderNav};
`;

export const Logo = () => {
  return (
    <WrapperStyle>
      <LogoTitle>Star Wars</LogoTitle>
    </WrapperStyle>
  );
};

export default Logo;
