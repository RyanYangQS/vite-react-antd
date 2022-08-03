import './App.less'
import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routes from '@/routes'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

// 渲染路由
function RouteElement() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <ConfigProvider locale={zhCN}>
          <RouteElement />
        </ConfigProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
