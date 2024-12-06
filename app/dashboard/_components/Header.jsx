import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-md'>
        <Image src="/next.svg" alt="logo" width={130} height={130} />
        <div>
            <UserButton />
        </div>
    </div>
  )
}

export default Header