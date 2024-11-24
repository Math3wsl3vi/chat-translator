import PricingCards from '@/components/PricingCards'
import React from 'react'

function PricingPage() {
  return (
    <div>
        <div className='text-center'>
        <h1 className=''>Pricing</h1>
        <h1 className='text-4xl font-semibold'>Our Pricing Options</h1>
        <p className='text-gray-500'>Check out our affordable payment plans</p>
        </div>
        <div className='mt-5'>
            <PricingCards redirect={true}/>
        </div>
    </div>
  )
}

export default PricingPage