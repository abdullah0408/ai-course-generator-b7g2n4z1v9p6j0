import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function header() {
  return (
    <div className='flex justify-between items-center p-5 absolute top-0 w-full'>
        <Image src="/next.svg" alt="logo" width={130} height={130} />
        <Button>
            Get Started
        </Button>
    </div>
  )
}

export default header