import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App';
import ViewPort from '../pages/viewPort/ViewPort';
import Error from '../pages/errorPage/Error';
import Login from '../pages/login/Login';
import Demo from '../pages/demo/Demo';
import CssFilter from '../pages/cssFliter/CssFilter';
import AudioCut from '../pages/audioCut/AudioCut';

const router = createBrowserRouter([
  {
    path: '/demo',
    element: <Demo />,
  },
  {
    path: '/view',
    element: <ViewPort />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/cssfilter',
    element: <CssFilter />,
    errorElement: <Error />,
  },
  {
    path: '/audiocut',
    element: <AudioCut />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
]);

export default router;
