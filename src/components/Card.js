import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

export const WrapperCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardStyle = styled.div`
  width: 240px;
  height: 400px;
  margin: 0px 15px 30px;
  border: 2px solid ${({ theme }) => theme.midiumBlack};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.midiumBlack};
  border-radius: 10px 10px 10px 10px;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 20px;
  margin: 10px;
  font-weight: 400;
`;

const Picture = styled.div`
  width: 200px;
  height: 260px;
  margin: 15px auto;
  border: 2px solid ${({ theme }) => theme.midiumBlack};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.midiumBlack};
  border-radius: 10px 10px 10px 10px;
  text-align: center;
`;

export const Card = () => {
  return (
    <CardStyle>
      <Title>Tytuł/Imie/Nazwa</Title>
      <Picture>Obrazek</Picture>
      <Button>Show More</Button>
    </CardStyle>
  );
};

export default Card;
