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
import avatar_image from "../assets/avatar-1.jpg";
//Icon for toggling the list in the sidebar for the dashboard
import { IoIosArrowForward } from "react-icons/io";


//Import membership icon
import { IoPersonSharp } from "react-icons/io5";

//Import helpdesk icon
import { SiHelpdesk } from "react-icons/si";

//Import of the filter icon
import { IoFilterOutline } from "react-icons/io5";

//Icon for online courses
import { TbStack2Filled } from "react-icons/tb";

//Import of the invoice icon
import { PiInvoice } from "react-icons/pi";

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
    //States to show or hide the admin content

    const [showAdminContent, setShowAdminContent] =useState(false);
    const toggleAdminContent =() =>{
        setShowAdminContent(!showAdminContent)
    }


    //Toggle lists of online courses
    const[hideOnlineCourses, showOnlineCourses]=useState(false);
    
    const toggleOnlineCourses =() =>{
        showOnlineCourses(!hideOnlineCourses)
    }

  return (
    <div className='sidebar'>
        <p className='top-sidebarcontent'>Able</p>
        <p className='content-prefix'>Pro</p>
        <div className={`admin-menu ${showAdminContent ? "open" : ""}`}>
            <div className='filter-container'>
            <IoFilterOutline className='filter-icon' onClick={toggleAdminContent}/>
            </div>
            <div className='admin-info'>
            <img src={avatar_image} className='avatar-icon'/>
            <p className='admin-name'><strong>John Smith</strong><br/>Administrator</p>
            </div>
    
            {showAdminContent &&(
                <>
            <ul className='sidebar-list'>
                <li className='description'><RiAccountBoxLine className='account-icon'/>My account</li>
                <li className='description'><VscSettingsGear className='account-icon'/>Settings</li>
                <li className='description'><MdOutlineLock className='account-icon'/>Lock screen</li>
                <li className='description'><IoIosPower className='account-icon'/>Logout</li>
                {/* <li></li> */}
            </ul>
            </>
            )}
        </div>
        {/** Navigation content below */}
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
                <li className='main-list' >
                <TbStack2Filled className='online-courses'/>
                    Online Courses
                <IoIosArrowForward className='forward-icon' 
                    onClick={toggleOnlineCourses}/>
                </li>
                {hideOnlineCourses && (
                    <> 
                    <ul className='online-courses-list'>
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
                    </ul>
                    </>
                )}
                {/*This is where the membership contents begin*/}
                <li className='main-list'><IoPersonSharp className='online-courses' />
                    Membership
                    <IoIosArrowForward className='forward-icon'/>
                    </li>
                <li className='main-list'><SiHelpdesk className='online-courses'/>
                    Helpdesk
                    <IoIosArrowForward className='forward-icon'/>
                </li>
                <li className='main-list'><PiInvoice className='online-courses'/>
                    Invoice
                <IoIosArrowForward className='forward-icon'/>
                    </li>
            </ul>
        </div>
        </div>
  )
}

export default Sidebar