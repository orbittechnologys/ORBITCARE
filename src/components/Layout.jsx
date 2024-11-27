import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex w-screen'>
        <div className='basis-1/5'>
            <Sidebar/>
        </div>
        <div className='basis-4/5'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout