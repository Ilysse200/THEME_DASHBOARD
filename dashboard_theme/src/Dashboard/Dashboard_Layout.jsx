import React from 'react'
import{Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import DashboardNavbar from './DashboardNavbar'
import Dashboard_View from './Dashboard_View'

function Dashboard_Layout() {
  return (
    <div>
        <DashboardNavbar/>
        <Sidebar/>
        {/* <Dashboard_View/> */}
        <Outlet />
    </div>
  )
}

export default Dashboard_Layout