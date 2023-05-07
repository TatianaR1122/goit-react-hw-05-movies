import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
  text-align: center;
  min-height: 450px;
`;

export const CastItem = styled.li`
  width: 200px;
  height: 350px;
  margin: 15px;
  overflow: hidden;
`;

export const CastImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.08);
    cursor: zoom-in;
  }
`;

export const CastName = styled.h4`
  margin-bottom: 0px;
  font-size: 17px;
  font-weight: 600;
  color: black;
`;

export const CastCharacter = styled.p`
  font-size: 15px;
  color: black;
`;
