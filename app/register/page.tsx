import { authOptions } from '@/auth'
import PricingCards from '@/components/PricingCards';
import { getServerSession } from 'next-auth'
import React from 'react'

async function Register() {
    const session = await getServerSession(authOptions);
  return (
    <div className='mt-20'>
        <div className='text-center text-2xl'>{"Let's"} handle Your Membership {session?.user?.name?.split(" ")?.[0]} !</div>
        <div className='mt-10'>
            <PricingCards redirect={false}/>
        </div>
    </div>
  )
}

export default Register