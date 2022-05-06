import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuLink = styled(NavLink)`
  margin-right: 20px;
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-size: 24px;

  &.active {
    text-decoration: underline;
  }
`;
