import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Index: React.FC = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Link to="login">login</Link>
        <Link to="home">home</Link>
      </div>
      <Outlet />
    </>
  )
}
export default Index
