import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
          <button className='bg-blue-500 rounded-full p-2'>Sign Up</button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <button className='bg-blue-500 rounded-full p-2'>Sign In</button>
        </SignOutButton>
      </SignedIn>
    </div>
  )
}

export default Home