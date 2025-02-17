import React from 'react'
import { useState } from 'react';
import '../Dashboard/Dashboard_styles/sidebar.css'
import { FaRegUserCircle } from "react-icons/fa";
import { RiAccountBoxLine } from "react-icons/ri";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineLock } from "react-icons/md";
import { IoIosPower } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { TbFile } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { FaCircleNotch } from "react-icons/fa";

//Icon for toggling the list in the sidebar for the dashboard
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
    //define states for toggling within the sidebar the navigation

    const [toggleList, showToggle]=useState(false);
    const showToggleList =() =>{
        showToggle(!toggleList);

    }

    //define states for toggling within the sidebar the layouts files

    const [toggleLayout, showLayout]=useState(false);
    const showToggleLayout =() =>{
        showLayout(!toggleLayout);

    }
    //states defined for students and teaachers toggling

    const [toggleStudent, showStudent]=useState(false);
    const showToggleStudent =() =>{
        showStudent(!toggleStudent);
    }

  return (
    <div className='sidebar'>
        <div className='admin-menu'>
            <div className='admin-info'>
            <img src='' className='avatar-icon'/>
            <p className='admin-name'>John Smith<br/>Administrator</p>
            </div>
        
            <ul className='sidebar-list'>
                <li className='description'><RiAccountBoxLine className='account-icon'/>My account</li>
                <li className='description'><VscSettingsGear className='account-icon'/>Settings</li>
                <li className='description'><MdOutlineLock className='account-icon'/>Lock screen</li>
                <li className='description'><IoIosPower className='account-icon'/>Logout</li>
                {/* <li></li> */}
            </ul>
        </div>
        <div className='navigation-content'>
            <h3 className='nav-title'>Navigation</h3>
            <ul className='nav-list'>
                <li className='dashboard-list'>
                    <VscGraphLine className='dashboard-icon'/>Dashboard
                    <IoIosArrowForward className='forward-icon' onClick={showToggleList} /></li>
                    {toggleList && (
                    <>
                <li className='nav-lists'>Default</li>
                <li className='nav-lists'>Analytics</li>
                <li className='nav-lists'>Finance</li>
                </>
                )}
                <li className='dashboard-list'>
                    <TbFile className='file-icon'/>Layouts 
                    <IoIosArrowForward className='forward-icon' 
                    onClick={showToggleLayout}/></li>

                    {toggleLayout && (
                        <>
                        <li>Vertical</li>
                        <li>Horizontal</li>
                        <li>Layouts2</li>
                        <li>Compact</li>
                        <li>Tab</li>
                        </>
                    )}
            </ul>
            <h3 className='nav-title'>widget</h3>
            <ul className='widget-list'>
                <li className='statistics'> <FaCircleNotch className='widget-icons'/>Statistics</li>
                <li className='statistics'> <RiBarChartHorizontalFill className='widget-icons'/>
                Data</li>
                <li className='statistics'> <FcStatistics className='widget-icons'/>Chart</li>
                
            </ul>
            <h3 className='nav-title'>Admin Panel</h3>

            {/**Content for Admin Panel */}
            <ul className='admin-content'>
                <li className='main-list'>Online Courses</li>
                <li>Dashboard</li>
                <li className='teacher-contents'>Teacher
                <IoIosArrowForward className='forward-icon' 
                onClick={showToggleStudent} />
                </li>
                {toggleStudent &&(
                    <>
                <li>List</li>
                <li>Apply</li>
                <li>Add</li>
                </>
            )}
                <li onClick={showToggleStudent}
                className='students-contents'>Student
                <IoIosArrowForward className='forward-icon'/>
                </li>
                {toggleStudent &&(
                    <>
                <li>List</li>
                <li>Apply</li>
                <li>Add</li>
                    </>
                )}
                <li>Courses</li>
                <li>Pricing</li>
                <li>Site</li>
                <li>Setting</li>
                <li>Membership</li>
                <li>Helpdesk</li>
                <li>Invoice</li>
            </ul>
        </div>
        </div>
  )
}

export default Sidebar