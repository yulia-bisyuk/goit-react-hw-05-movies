import styled from 'styled-components';

const FilmWrapper = styled.div`
  display: flex;
`;
const FilmImage = styled.img`
  display: block;
  width: 320px;
  height: auto;
  object-fit: cover;
`;

const GoBackButton = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  color: #063970;
  margin-bottom: 12px;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #063970;
`;

const FilmInfoWrapper = styled.div`
  margin-left: 20px;
  margin-right: auto;
  padding: 20px;
`;

export { FilmWrapper, FilmImage, FilmInfoWrapper, GoBackButton };
