import { WrapperStyle } from 'styles/WrapperStyles.style';
import Slider from 'components/Slider';
import Card from 'components/Card';
import { WrapperCard } from 'components/Card';
export const Films = () => {
  return (
    <WrapperStyle>
      <WrapperCard>
        <Slider />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </WrapperCard>
    </WrapperStyle>
  );
};

export default Films;
