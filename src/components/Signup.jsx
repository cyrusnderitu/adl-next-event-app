import React, { useState } from 'react'

const Signup = () => {

    const [email, setEmail] = useState("")

    const onSubmit = (e)=>{
        e.preventDefault();
    }

    const onChange = ({target})=>{
        setEmail(target.value)
    }
  return (
    <div>
        <form className='flex justify-center items-center gap-x-2' onSubmit={onSubmit}>
            <input type="email" name="email" placeholder='Enter email' className='rounded-lg indent-2 px-4 py-2 placeholder:text-gray-500' value={email} onChange={onChange}/>
            <button type="submit" className="bg-cyan-400 text-white rounded-lg text-lg font-semibold p-2">Get updates</button>
        </form>
    </div>
  )
}

export default Signup
