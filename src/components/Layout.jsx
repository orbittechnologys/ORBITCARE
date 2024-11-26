import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex w-screen'>
        <div className='basis-1/4'>
            <Sidebar/>
        </div>
        <div className='basis-3/4'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout