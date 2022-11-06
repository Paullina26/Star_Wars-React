import styled from 'styled-components';

const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.green};
  color: ${({ theme }) => theme.lightGray};
  height: 200px;
  width: 200px;
`;

export const Navigation = () => {
  return (
    <WrapperStyle>
      <p>Home</p>
      <p>Films</p>
      <p>Charakters</p>
      <p>Planets</p>
    </WrapperStyle>
  );
};

export default Navigation;
