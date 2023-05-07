import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  margin: 30px auto 20px;
  text-align: center;
`;

export const Wraper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Input = styled.input`
  padding: 8px 20px;
  outline: #527c82;
  border-color: transparent;
`;

export const Button = styled.button`
  margin: 0px 10px 10px;
  padding: 10px 20px 10px;
  background-color: transparent;
  border: 2px solid #e74c3c;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border-color: white;
  color: #fff;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #90cea1;
    color: #fff;
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;

export const MoviesList = styled.ul`
  display: grid;
  /* max-width: calc(100vw - 35px); */
  max-width: 100%;
  margin: 10px auto 0px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  list-style: none;
`;

export const MoviesItem = styled.li`
  overflow: hidden;
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-style: italic;
  color: black;
`;

export const MoviePoster = styled.img`
  width: 100%;
  min-height: 432px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
