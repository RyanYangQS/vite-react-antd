import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import LoginLayout from '@/layouts/LoginLayout'
import LazyLoading from '@/components/LazyLoading'

const route404 = {
  path: '*',
  element: () => import('@/pages/common/404'),
}

const routes = [
  {
    path: 'user/*',
    element: <LoginLayout />,
    children: [
      { path: '', element: <Navigate to="login" /> }, // Redirect
      {
        path: 'login',
        element: () => import('@/pages/login'),
      },
      {
        path: 'home',
        element: () => import('@/pages/home'),
      },
      route404,
    ],
  },
]

// 懒加载

function LazyElement(props) {
  const { importFunc } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<LazyLoading />}>
      <LazyComponent />
    </Suspense>
  )
}

// 处理routes 如果element是懒加载，要包裹Suspense
function dealRoutes(routesArr) {
  if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
    routesArr.forEach((route) => {
      if (route.element && typeof route.element == 'function') {
        const importFunc = route.element
        route.element = <LazyElement importFunc={importFunc} />
      }
      if (route.children) {
        dealRoutes(route.children)
      }
    })
  }
}
dealRoutes(routes)

export default routes
