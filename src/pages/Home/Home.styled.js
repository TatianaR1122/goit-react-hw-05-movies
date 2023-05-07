import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  color: white;
`;

export const MoviesList = styled.ul`
  list-style: none;
`;

export const MoviesItem = styled.li`
  overflow: hidden;
`;

export const LinkFilm = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  display: flex;
  margin-bottom: 5px;
  margin-top: 5px;
  text-align: center;
  font-style: italic;
  color: white;
  color: black;
`;
