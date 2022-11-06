import styled from 'styled-components';

const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.darkGreen};
  color: ${({ theme }) => theme.lightGray};
  height: 200px;
  width: 200px;
`;

export const Home = () => {
  return (
    <WrapperStyle>
      <p>Home</p>
    </WrapperStyle>
  );
};

export default Home;
