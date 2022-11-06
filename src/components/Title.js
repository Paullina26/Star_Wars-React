import styled from 'styled-components';

const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.midiumBlack};
  color: ${({ theme }) => theme.lightYellow};
  height: 200px;
  width: 200px;
`;

export const Title = () => {
  return (
    <WrapperStyle>
      <h1>Star Wars</h1>
    </WrapperStyle>
  );
};

export default Title;
