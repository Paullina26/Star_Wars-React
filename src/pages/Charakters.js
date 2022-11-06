import styled from 'styled-components';

const WrapperStyle = styled.div`
  background-color: ${({ theme }) => theme.darkYellow};
  color: ${({ theme }) => theme.lightGray};
  height: 200px;
  width: 200px;
`;

export const Charakters = () => {
  return (
    <WrapperStyle>
      <p>Charakters</p>
    </WrapperStyle>
  );
};

export default Charakters;
