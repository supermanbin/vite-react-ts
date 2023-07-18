import {createBrowserRouter} from 'react-router-dom'
import App from '../pages/App'
import ViewPort from '../pages/viewPort/ViewPort'
import Login from '../pages/login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/view',
    element: <ViewPort />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router