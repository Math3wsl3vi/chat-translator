'use client'

import { useSession } from "next-auth/react"


const CheckoutButton = () => {
    const { data: session } = useSession()

    const createCheckoutSession = async () => {
        if (!session) return

    }
  return (
    <div>
        {/* if subscribed */}

    <button 
    onClick={createCheckoutSession}
    className='p-2 bg-indigo-600 text-center rounded-md text-white mt-8 shadow-sm hover:bg-indigo-500 '>
        Sign Up
    </button>
    </div>
  )
}

export default CheckoutButton