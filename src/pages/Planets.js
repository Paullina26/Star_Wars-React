import { WrapperStyle } from 'styles/WrapperStyles.style';
import { Loader } from '../components/Loader';

export const Planets = () => {
  return (
    <WrapperStyle>
      <p>Planets</p>
      <Loader />
    </WrapperStyle>
  );
};

export default Planets;
