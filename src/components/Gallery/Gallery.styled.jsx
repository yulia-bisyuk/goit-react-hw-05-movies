import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FilmGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 0px 0px;
  list-style: none;
`;
const FilmGalleryItem = styled.li`
  box-shadow: rgb(12 0 90 / 35%) 0px 5px 15px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
const FilmTitle = styled.h2`
  font-size: 16px;
  margin-left: 12px;
`;
const FilmInfo = styled.p`
  margin-left: 12px;
  margin-top: 0px;
  font-size: 14px;
  color: #063970;
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;
const FilmImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const FilmLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: inherit;
  }
`;

const LoadMoreButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #063970;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: 20px;
  color: white;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    color: #063970;
    background-color: white;
  }
`;
const ButtonsWrapper = styled.div`
  margin-left: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`;
export {
  FilmGallery,
  FilmImage,
  FilmGalleryItem,
  FilmTitle,
  FilmInfo,
  LoadMoreButton,
  ButtonsWrapper,
  FilmLink,
};
