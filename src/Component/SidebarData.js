import React from 'react';
import { FaBars , FaWpforms } from 'react-icons/fa';
import { AiOutlineClose , AiOutlineShoppingCart , AiOutlineCalendar , AiOutlineLayout , AiOutlineFile , 
    AiOutlineWindows , AiOutlineMail } from 'react-icons/ai';
import {IoIcons } from 'react-icons/io';
import {BiHomeAlt , BiChat , } from 'react-icons/bi';
import {BsTable , BsFillBarChartFill, BsPerson} from 'react-icons/bs'
import {SiGooglemaps} from 'react-icons/si' ; 
import {FcSmartphoneTablet} from 'react-icons/fc' ; 





export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <BiHomeAlt className="mainIcon"/> , 
        cName : 'nav-text'


    },
    {
        title: 'Email',
        path: '/',
        icon: <AiOutlineMail className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Chat',
        path: '/',
        icon: <BiChat className="mainIcon" /> , 
        cName : 'nav-text'


    },

    {
        title: 'eCommerce',
        path: '/',
        icon: <AiOutlineShoppingCart className="mainIcon" /> , 
        cName : 'nav-text'


    },

    {
        title: 'Calender',
        path: '/',
        icon: <AiOutlineCalendar className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Layouts',
        path: '/',
        icon: <AiOutlineLayout className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Profile',
        path: '/',
        icon: <BsPerson className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Pages',
        path: '/',
        icon: <AiOutlineFile className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'UI Elements',
        path: '/',
        icon: <FcSmartphoneTablet className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Icons',
        path: '/',
        icon: <AiOutlineWindows className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Charts',
        path: '/',
        icon: <BsFillBarChartFill className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Table',
        path: '/',
        icon: <BsTable className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Forms',
        path: '/',
        icon: <FaWpforms className="mainIcon" /> , 
        cName : 'nav-text'


    },
    {
        title: 'Maps',
        path: '/',
        icon: <SiGooglemaps className="mainIcon" /> , 
        cName : 'nav-text'


    },
    
]



