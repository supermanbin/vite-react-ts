import {createBrowserRouter} from 'react-router-dom'
import App from '../pages/App'
import ViewPort from '../pages/viewPort/ViewPort'
import Error from '../pages/errorPage/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/view',
    element: <ViewPort />
  }
])

export default router