import { LoaderBox } from './Loader.styled';
var Spinner = require('react-spinkit');

const Loader = () => {
  return (
    <LoaderBox>
      <Spinner name="three-bounce" color="blue" />
    </LoaderBox>
  );
};

export default Loader;
