import { WrapperLoader, Loading, Dot, TextLoading } from 'styles/Loader.style';

export const Loader = () => {
  return (
    <WrapperLoader>
      <Loading>
        <TextLoading>Loading</TextLoading>
        <Dot delay='0s' />
        <Dot delay='0.1s' />
        <Dot delay='0.2s' />
      </Loading>
    </WrapperLoader>
  );
};

export default Loader;
