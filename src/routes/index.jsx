import { Navigate } from 'react-router-dom'
import LoginLayout from '@/layouts/LoginLayout'
import Login from '@/pages/login'
import Home from '@/pages/home'

const routes = [
  {
    path: 'user/*',
    element: <LoginLayout />,
    children: [
      { path: '', element: <Navigate to="login" /> }, // Redirect
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      // route404,
    ],
  },
]

export default routes
