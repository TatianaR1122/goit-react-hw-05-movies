import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin: 20px auto 0;
  text-align: start;
`;

export const NaviLink = styled(NavLink)`
  display: inline-block;
  padding: 15px 20px;
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: #01b4e4;
  }
`;
