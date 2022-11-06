import styled from 'styled-components';

const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.lightGray};
  height: 200px;
  width: 200px;
`;

export const Films = () => {
  return (
    <WrapperStyle>
      <p> Films</p>
    </WrapperStyle>
  );
};

export default Films;
