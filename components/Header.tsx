"use client"

import React from 'react'
import { ClerkLoaded, useUser } from '@clerk/nextjs'
import Link from 'next/link';
import Form from 'next/form';
import { TrolleyIcon } from '@sanity/icons';

function Header() {

    const { user } = useUser();
    

    return (
        <header className='flex flex-wrap items-center justify-between px-4 py-2 '>
          {/* Top  */}
          <div>
              <Link className="font-bold text-blue-600 text-2xl  hover:opacity-50 cursor-pointer mx-auto sm:mx-0" href="/shopr">Shopr</Link>
              <Form className='w-full sm:w-auto sm:mx-4 sm:flex-1 sm:mt-0 mt-2' action="/search">
                  <input  
                      className='px-4 py-2 focus:outline-none focus:ring-blue-400 focus:ring-2 focus:ring-opacity-20 border border-black/30 rounded-sm max-w-4xl w-full '
                      type='text' name="query" placeholder='Search for items' />
                </Form>
                
                <div>
               <Link
                    className="flex-1 relative flex justify-center items-center space-x-2 bg-blue-400 font-bold hover:bg-blue-700 px-4 py-2 rounded-sm text-white"
                    href="/baskets"
                >
                    <TrolleyIcon className='w-6 h-6'/>
                        <span>My Baskets</span>
                  
                    </Link>

                    <ClerkLoaded>
                        
                    </ClerkLoaded>
                    </div>

              
            </div>
        </header>
  )
}

export default Header;
