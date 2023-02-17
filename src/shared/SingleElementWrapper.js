import { CardStyle, Title, Picture, WrapperCard, WrapperInformation } from 'styles/Card.style';
import NoPicture from '../assets/Picture/noPicture.jpg';
import { Button } from 'components/Button';

const SingleElementWrapper = ({ img, title, backButton, children }) => {
  return (
    <WrapperCard>
      <CardStyle>
        <Title>{title}</Title>
        <Picture>
          <img src={img || NoPicture} />
        </Picture>
        <Button to={backButton}>Back</Button>
      </CardStyle>
      <WrapperInformation>{children}</WrapperInformation>
    </WrapperCard>
  );
};

export default SingleElementWrapper;
