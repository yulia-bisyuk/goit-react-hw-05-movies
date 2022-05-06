import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinksWrapper = styled.div`
  margin-bottom: 12px;
  margin-top: 16px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #063970;
  margin-right: 12px;

  &.active,
  :hover {
    text-decoration: underline;
  }
`;
export { Link, LinksWrapper };
