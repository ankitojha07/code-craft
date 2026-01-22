import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center'>
      <SignedOut>
        <SignUpButton>
          <button className='bg-blue-500 rounded-full p-2'>Sign In</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <button className='bg-red-500 rounded-full p-2'>Sign Out</button>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default Home