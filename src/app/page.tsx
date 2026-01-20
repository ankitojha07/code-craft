import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton/>
      </SignedOut>
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default Home