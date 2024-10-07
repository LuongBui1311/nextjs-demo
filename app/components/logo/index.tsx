import { PRODUCT } from '@/app/lib/constants'
import Link from 'next/link'
import React from 'react'
import { AiFillMoon } from 'react-icons/ai'

const Logo = () => {
  return (
    <div>
      <Link href={PRODUCT}>
          <div id="logo" className="flex gap-x-1 align-middle text-violet-700">
            <p id="store-name" className="font-serif text-sm md:text-xl font-semibold">
              Moonchild
            </p>
            <AiFillMoon id="store-logo" className="text-base md:text-2xl" />
          </div>
        </Link>
    </div>
  )
}

export default Logo
