import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as ImIcons from 'react-icons/im';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [

    {
        title: 'Shops Map',
        path: '/map',
        icon: <SiIcons.SiGooglemaps/>,
        cName: 'nav-text'
    },
    {
        title: 'My bookings',
        path: '/reservations',
        icon: <GiIcons.GiOpenBook/>,
        cName: 'nav-text',
    },
    {
        title: 'Bikes',
        path: '/bikes',
        icon: <RiIcons.RiBikeFill/>,
        cName: 'nav-text'
    },

]
