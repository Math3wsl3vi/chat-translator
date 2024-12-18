import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './ui/DarkModeToggle'
import UserButton from './UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessagesSquareIcon } from 'lucide-react'
import CreateChatbutton from './CreateChatbutton'

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session)


  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
            {/* logo */}
            <Logo/>
            <div className='flex-1 flex items-center justify-end space-x-4'>
                {/* language select */}

                {/* session */}
                {session ? (
                  <>
                  <Link href={'/chat'} prefetch={false}>
                  <MessagesSquareIcon  className='text-black dark:text-white'/>
                  </Link>
                  <CreateChatbutton/>
                  </>
                ):(
                  <Link href={'/pricing'}>Pricing</Link>
                )}

                {/* darkmode */}
                <DarkModeToggle/>
                {/* userButton */}
                <UserButton session={session}/>
            </div>
        </nav>
        {/* upgrade banner */}
    </header>
  )
}

export default Header