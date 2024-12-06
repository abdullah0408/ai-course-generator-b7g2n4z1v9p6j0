'use client'
import React from 'react'
import Image from 'next/image'
import { FaHome, FaSearch, FaRocketchat, FaSignOutAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"


function SideBar() {
    const menuItems = [
        {
            id: 0,
            name: 'Dashboard',
            icon: <FaHome />,
            path: '/dashboard'
        },
        {
            id: 1,
            name: 'Explore',
            icon: <FaSearch />,
            path: '/dashboard/explore'
        },
        {
            id: 2,
            name: 'Upgrade',
            icon: <FaRocketchat />,
            path: '/dashboard/upgrade'
        },
        {
            id: 3,
            name: 'Logout',
            icon: <FaSignOutAlt />,
            path: '/dashboard/logout'
        }
    ]
    const pathname = usePathname();
  return (
    <div className='fixed h-full md:w-64 p-5 shadow-md'>
        <Image src="/next.svg" className='mt-3' alt="logo" width={130} height={130} />
        <hr className='mt-3 mb-3'/>
        <ul>
            {menuItems.map((item, id) => (
                <Link href={item.path} key={id}>
                <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-gray-800 rounded-md mb-2 ${pathname === item.path ? 'bg-gray-100 text-gray-800' : ''}`} key={id}>
                    <div className='text-2xl'>{item.icon}</div>
                    <h2>{item.name}</h2>
                </div>
                </Link>
            ))}
        </ul>
        <div className='absolute bottom-10 w-[80%]'>
        <Progress className='' value={50} />
        </div>
    </div>
  )
}

export default SideBar