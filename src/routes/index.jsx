import { Navigate } from 'react-router-dom'
import LoginLayout from '@/layouts/LoginLayout'
import Login from '@/pages/login'

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
      // route404,
    ],
  },
]

export default routes
