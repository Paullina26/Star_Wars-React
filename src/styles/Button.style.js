import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  text-decoration: none;
  padding: 3px 10px;
  border: 2px solid ${({ theme }) => theme.ButtonBorder};
  box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadow};
  background: ${({ theme }) => theme.GlassBackground};
  border-radius: 10px;
  display: inline-block;
  color: ${({ theme }) => theme.BasicFont};
  font-size: 20px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.ButtonBorderHover};
    box-shadow: 1px 1px 5px 1px ${({ theme }) => theme.ButtonBorderShadowHover};
    transition: 0.2s linear;
  }
`;
