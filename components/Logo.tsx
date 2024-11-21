import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'


const Logo = () => {
  return (
    <Link href={'/'} className='overflow-hidden' prefetch={false}>
        <div className='flex items-center w-72 h-14'>
            <AspectRatio
            ratio={16/9}
            className='flex items-center justify-center' >
                <h1 className='font-semibold text-2xl'>Chat With Anyone</h1>
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo