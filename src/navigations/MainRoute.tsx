import { Route, Routes } from 'react-router-dom';
import Home from 'screens/home/Home';
import Movies from 'screens/movies/Movies';
import CatchAllRoute from './CatchAllRoute';

const MainContentRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Movies />} />
      <Route path="*" element={<CatchAllRoute />} />
    </Routes>
  );
};

export default MainContentRoute;
