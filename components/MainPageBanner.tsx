import { MessagesSquareIcon, Mic, User } from 'lucide-react'
import React from 'react'
import CreateChatbutton from './CreateChatbutton'
import { Button } from './ui/button'
import DarkModeToggle from './ui/DarkModeToggle'
import UserButton from './UserButton'
import UserAvatar from './UserAvatar'

const MainPageBanner = () => {
  return (
    <div className='p-5 border-2 shadow-sm rounded-md lg:mx-60 m-10'>
            {/* header */}
            <div className='flex flex-row justify-between items-center'>
                <h1>Medical Translator</h1>
                <div className='flex flex-row gap-2 items-center'>
                    <Button variant={'outline'}>English </Button>
                    <MessagesSquareIcon/>
                    <CreateChatbutton/>
                    <DarkModeToggle/>
                    <UserAvatar/>
                </div>
            </div>
            {/* cat options */}
            <div className='mt-5 flex flex-row gap-3 justify-end'>
                <Button>Add User</Button>
                <Button variant={'ghost'}>Share Chat</Button>
                <Button variant={'destructive'}>Delete Chat</Button>

            </div>
            {/* top-part */}
            <div className='border rounded-md p-5 flex md:flex-row flex-col gap-5 mt-5'>
                <div className='flex flex-row gap-5 items-center bg-slate-50 border p-3 rounded-full'>
                    <div><UserAvatar/></div>
                    <div>
                        <h1 className='text-sm'>Levimathews9841@gmail.com</h1>
                        <h2 className='text-sm text-red-500'>Doctor</h2>
                    </div>
                </div>
                <div className='flex flex-row gap-5 items-center bg-slate-50 border p-3 rounded-full'>
                    <div><UserAvatar/></div>
                    <div>
                        <h1 className='text-sm'>kmathewslevi@gmail.com</h1>
                    </div>
                </div>
            </div>
            {/* chat part */}
            <div className='mt-5'>
                <div className='flex flex-row items-end gap-3'>
                    <div><UserAvatar/></div>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='text-red-400 italic'>Doc</h1>
                        <h2>Hello How are You</h2>
                    </div>
                </div>
                <div className='flex flex-row items-end gap-3 justify-end mt-3'>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='italic'>translation...</h1>
                        <h2>Habari Yako umeshindaje?</h2>
                    </div>
                    <div><UserAvatar/></div>
                </div>
                <div className='flex flex-row items-end gap-3 justify-end mt-3'>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='italic'>patient</h1>
                        <h2>Nimeshinda vizuri lakini naumwa na kichwa</h2>
                    </div>
                    <div><UserAvatar/></div>
                </div>
                <div className='flex flex-row items-end gap-3 mt-3'>
                    <div><UserAvatar/></div>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='text-red-400 italic'>translation...</h1>
                        <h2>Im good but I'm having a headache</h2>
                    </div>
                </div>
                <div className='flex flex-row items-end gap-3 mt-3'>
                    <div><UserAvatar/></div>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='text-red-400 italic'>Doc</h1>
                        <h2>Sorry to hear that, I will give you medicaiton</h2>
                    </div>
                </div>
                <div className='flex flex-row items-end gap-3 justify-end mt-3'>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='italic'>translation...</h1>
                        <h2>Pole kwa hayo, nitakupa dawa ya kichwa</h2>
                    </div>
                    <div><UserAvatar/></div>
                </div>
                <div className='flex flex-row items-end gap-3 justify-end mt-3'>
                    <div className='bg-slate-50 rounded-md p-5'>
                        <h1 className='italic'>patient</h1>
                        <h2>sawa Asante</h2>
                    </div>
                    <div><UserAvatar/></div>
                </div>
            </div>
            {/* send button */}
            <div className='flex flex-row gap-2 mt-5 md:mx-20 items-center mx-5'>
                <div className='border p-2 rounded-md flex-1'>
                    <input type="text"  placeholder='Andika ujumbe wako hapa...'/>
                </div>
                <div className='cursor-pointer hover:bg-slate-50 hover:rounded-md p-2'>
                    <Mic/>
                </div>
                <div>
                    <Button>Send</Button>
                </div>
            </div>
    </div>
  )
}

export default MainPageBanner