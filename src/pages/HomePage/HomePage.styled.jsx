import styled from 'styled-components';

const FilmGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 24px;
  margin-top: 36px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const FilmImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: rgb(12 0 90 / 35%) 0px 5px 15px;
`;
export { FilmGallery, FilmImage };
