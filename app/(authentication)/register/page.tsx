import RegisterForm from '@/app/components/form/registerForm'
import { LOGIN } from '@/app/lib/constants'
import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div className="flex mt-8 md:mt-12 py-12">
      <div className="mx-7 md:mx-auto md:w-10/12 xl:w-8/12 grid gap-2">
        <div className="flex flex-col gap-2 md:gap-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-violet-700">Register</h1>
          <p className="text-base italic md:text-lg text-balance text-violet-950">
            Provide us your information to get access to the system
          </p>
        </div>
        <RegisterForm />
        <div className="mt-4 text-center text-sm md:text-base text-violet-950">
          Already have an account?{" "}
          <Link href={LOGIN} className="underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
