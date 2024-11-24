import { CheckIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CheckoutButton from './CheckoutButton'
const tiers = [
    {
        id:null, 
        name: 'Starter',
        href: '@',
        price:'Free',
        priceMonthly: null,
        description:'Talk to a doctor right away,anywhere!',
        feartures: [
            'Message Chat Limit in Chats',
            '2 Participant limit in Chat',
            '3 Chat Rooms limit',
            'Supports 2 languages',
            '48-hour support response time'
                    ],
    },
    {
        id:'ulubububule', 
        name: 'Pro',
        href: '@',
        price:'ksh 100',
        priceMonthly: null,
        description:'Unlock the Full Potential with Pro!',
        feartures: [
            'Unlimited Messages in Chats',
            'Unlimited Participants in Chats',
            'Unlimited Chat Rooms',
            'Supports up to 10 languages',
            'Multimedia support in chats (coming soon)',
            '1-hour, dedicated support response time',
            'Early access to New Features',
                    ],
    },
]
const PricingCards = ({redirect}: {redirect: boolean}) => {
  return (
    <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 dark:text-black'>
        {tiers.map((tier)=> (
            <div key={tier.id}
            className='flex flex-col justify-between rounded-xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'
            >
                <div>
                    <h1 className='text-sm mb-5 text-indigo-600'>{tier.name}</h1>
                    <h1 className='text-3xl font-semibold mb-3'>{tier.price}</h1>
                    <h1 className='text-lg mb-10'>{tier.description}</h1>
                    <ul role='list' 
                    className='flex gap-4 flex-col'>
                        {tier.feartures.map((feature)=>(
                            <li key={feature} className='flex gap-x-3 items-center'>
                                <CheckIcon 
                                className='w-4 h-4'
                                aria-hidden={true}/>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                {redirect ? (
                    <Link href={'/register'} className='p-2 bg-indigo-600 text-center rounded-md text-white mt-8 shadow-sm hover:bg-indigo-500 '>
                        Get Started today
                    </Link>
                ): (
                    tier.id && <CheckoutButton/>
                )}
            </div>
        ))}
    </div>
  )
}

export default PricingCards