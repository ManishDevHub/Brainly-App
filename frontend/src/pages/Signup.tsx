import React from 'react'
import { Input } from '../components/input'
import { Button } from '../components/Button'

export default function Signup() {
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center
    items-center'>\
     
<div className='bg-white rounded-xl border min-w-48 p-8'>
    <Input placeholder='Username' />
     {/* <Input placeholder='email' /> */}
      <Input placeholder='password' />
<div className='flex justify-center pt-4'>
      <Button variant='primary' text='Signup' fullWidth ={true}/>
      </div>
</div>

    </div>
  )
}
