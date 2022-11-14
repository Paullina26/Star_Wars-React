import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* background-color: #08e36a31; */
`;

const CardStyle = styled.div`
  width: 240px;
  height: 360px;
  margin: 0px 15px 30px;
  border: 2px solid ${({ theme }) => theme.NavBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.NavBorderShadow};
  border-radius: 10px 10px 10px 10px;
  text-align: center;
`;

export const Card = () => {
  return (
    <CardStyle>
      <p> Card</p>
    </CardStyle>
  );
};

export default Card;
