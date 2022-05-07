import { Link } from 'react-router-dom';
import { Title } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <div>
      <Title>
        We didn't find anything... Please return to{' '}
        <Link to="/">Home Page</Link>
      </Title>
    </div>
  );
};

export default NotFoundPage;
