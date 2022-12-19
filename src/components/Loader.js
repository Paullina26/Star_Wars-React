import styled, { keyframes } from 'styled-components';

export const BounceAnimation = keyframes`
  0% {
    margin-bottom: 10px;
  }

  50% {
    margin-bottom: 1.2rem;
  }

  100% {
    margin-bottom: 10px;
  }
`;

export const WrapperLoader = styled.div`
  z-index: 1;
  position: absolute;
  font-size: 35px;
  justify-content: center;
  width: 400px;
  height: 200px;
  background: ${({ theme }) => theme.GlassBacgraund};
  border: 2px solid ${({ theme }) => theme.GlassBorder};
  box-shadow: 0px 8px 32px ${({ theme }) => theme.GlassShadow};
  border-radius: 10px 10px 10px 10px;
  color: ${({ theme }) => theme.LogoFont};
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loading = styled.div`
  margin: 15%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const TextLoading = styled.p`
  font-size: 45px;
  font-weight: 700;
`;

export const Dot = styled.div`
  background-color: ${({ theme }) => theme.LogoFont};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  margin-bottom: 10px;
  animation: ${BounceAnimation} 0.7s linear infinite;
  animation-delay: ${props => props.delay};
`;

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
