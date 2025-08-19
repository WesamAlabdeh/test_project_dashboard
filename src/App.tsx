import { Routes } from 'react-router-dom';
import { BaseRoute } from './Routes';
import RenderRoutesRecursively from '@Module/core/components/Routes/RenderRoutesRecursively';
import { NotFoundRoute } from '@Module/core/components/Routes/StaticRoutes';
import './Module/core/styles/App/index.scss';
const App = () => {
  return (
    <Routes   >
      {RenderRoutesRecursively(BaseRoute)}
      {NotFoundRoute}
    </Routes>
  );
};

export default App;
