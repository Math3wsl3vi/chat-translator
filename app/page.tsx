import MainPageBanner from '@/components/MainPageBanner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className='flex flex-col gap-10'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold'>Talk To A Doctor in any Language</h1>
          <p>You speak your language, we'll translate</p>
        </div>
        <div className='flex items-center justify-center gap-10'>
          <Link href={'/chat'}>
          <Button>Get Started</Button>
          </Link>
          <Link href={'/pricing'}>
          <Button variant={'outline'}>View Pricing</Button>
          </Link>
        </div>
        <div>
          <MainPageBanner/>
        </div>
      </div>
    </div>
  );
};

export default Page;
