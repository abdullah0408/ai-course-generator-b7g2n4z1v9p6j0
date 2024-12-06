'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function AddCourse() {
    const {user} = useUser()
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h2 className='text-2xl'>Hello, <span className='font-bold'>{user?.fullName}</span></h2>
        </div>
        <Link href={'/create-course'}>
        <Button>+ Add Course</Button>
        </Link>
    </div>
  )
}

export default AddCourse