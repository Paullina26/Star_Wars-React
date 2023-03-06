import styled from 'styled-components';

export const WrapperCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const CardStyle = styled.div`
  width: 280px;
  height: 450px;
  margin: 0px 15px 30px;
  backdrop-filter: blur(6px);
  background: ${({ theme }) => theme.GlassBackground};
  border: 2px solid ${({ theme }) => theme.GlassBorder};
  box-shadow: 0px 8px 32px ${({ theme }) => theme.GlassShadow};
  border-radius: 10px 10px 10px 10px;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: 20px;
  margin: 20px auto;
  font-weight: 400;
`;

export const Picture = styled.div`
  margin: 15px auto;

  img {
    width: 210px;
    height: 300px;
    border: 2px solid ${({ theme }) => theme.GlassBorder};
    box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.GlassShadow};
    border-radius: 10px 10px 10px 10px;
  }
`;

export const WrapperInformation = styled.h4`
  font-size: 15px;
  margin: 0px auto;
  width: 700px;
  height: 450px;
  font-weight: 200;
  background: ${({ theme }) => theme.GlassBackground};
  border: 2px solid ${({ theme }) => theme.GlassBorder};
  box-shadow: 0px 8px 32px ${({ theme }) => theme.GlassShadow};
  border-radius: 10px 10px 10px 10px;
  backdrop-filter: blur(6px);
  p {
    margin: 20px;
    font-size: 20px;
  }
`;
