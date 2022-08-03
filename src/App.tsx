import './App.css'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '@/routes'

// 渲染路由
function RouteElement() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <RouteElement />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
