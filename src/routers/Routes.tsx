import {createBrowserRouter} from 'react-router-dom'
import App from '../pages/App'
import ViewPort from '../pages/viewPort/ViewPort'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/view',
    element: <ViewPort />
  }
])

export default router