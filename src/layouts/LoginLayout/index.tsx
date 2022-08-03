import React from 'react'
import { Outlet } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <>
      <div>
        <span>菜单1</span>
        <span>菜单1</span>
      </div>
      <Outlet />
    </>
  )
}
export default Index
