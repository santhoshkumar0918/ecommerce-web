"use client"

import React from 'react'
import { ClerkLoaded, SignedIn, SignInButton, useClerk, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import Form from 'next/form';
import { PackageIcon, TrolleyIcon } from '@sanity/icons';
import { json } from 'stream/consumers';

function Header() {
   
    const { user } = useUser();

    const clerkCreatePasskey = async() => {
  try {
      const response = await user?.createPasskey();
      console.log(response);
  } catch (err) {
      console.error("Error", JSON.stringify(err, null, 2));
  }
    }
    

    return (
     <header className="flex items-center justify-between px-4 py-2 space-x-4">
    {/* Container for Logo, Search, and Buttons */}
    <div className="flex items-center justify-between flex-wrap space-x-4 w-full">
        
        {/* Logo */}
        <Link 
            className="font-bold text-blue-600 text-2xl hover:opacity-50 cursor-pointer" 
            href="/shopr"
        >
            Shopr
        </Link>

        {/* Search Form */}
        <Form className="flex-1" action="/search">
            <input
                className="w-full px-4 py-2 focus:outline-none focus:ring-blue-400 focus:ring-2 focus:ring-opacity-20 border border-black/30 rounded-sm"
                type="text"
                name="query"
                placeholder="Search for items"
            />
        </Form>

        {/* My Baskets Button */}
        <Link
            className="flex items-center justify-center space-x-2 bg-blue-400 font-bold hover:bg-blue-700 px-4 py-2 rounded-sm text-white"
            href="/baskets"
        >
            <TrolleyIcon className="w-6 h-6" />
            <span>My Baskets</span>
        </Link>

        {/* My Orders Button (Visible if user is logged in) */}
        <ClerkLoaded>
            <SignedIn>
                <Link
                    className="flex items-center justify-center space-x-2 bg-blue-400 font-bold hover:bg-blue-700 px-4 py-2 rounded-sm text-white"
                    href="/orders"
                >
                    <PackageIcon className="w-6 h-6" />
                    <span>My Baskets</span>
                </Link>
                    </SignedIn>
                    
                     {user ? (
                <div className='flex items-center space-x-2'>
                   <UserButton/>
                            <div className='hidden sm:block text-xs'>
                                <p className='text-gray-400'> Welcome Back</p>
                                <p className='font-bold'>{ user.fullName}!</p>
                           </div>
                            </div>
                
                    ) : (
                            <SignInButton mode='modal'/>
                    )}
                    
                    {user?.passkeys.length === 0 && (
                        <button
                            onClick={clerkCreatePasskey}
                            className=' bg-white hover:bg-blue-700 hover:text-white text-blue-500 animate-pulse font-bold rounded py-2 px-4 border border-blue-300'>
                            
                            Create new Passkey
                            </button>
                    )}
                </ClerkLoaded>

    </div>
</header>

  )
}

export default Header;
