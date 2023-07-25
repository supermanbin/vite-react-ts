import {createBrowserRouter} from 'react-router-dom'
import App from '../pages/App'
import ViewPort from '../pages/viewPort/ViewPort'
import Error from '../pages/errorPage/Error'
import Login from '../pages/login/Login'

const router = createBrowserRouter([
  {
    path: '/demo',
    element: <App />
  },
  {
    path: '/view',
    element: <ViewPort />
  },
  {
    path: '/',
    element: <Login />
  }
])

export default router