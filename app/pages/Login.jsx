import React from 'react'

const Login = () => {

    return (
        <div className='flex justify-center items-center h-[600px]'>
            <div className='border border-[#ddd] w-96 p-3'>
                <h1 className='text-3xl text-center'>Login</h1>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Name</label>
                    <input className='input w-full' type="text" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Email</label>
                    <input className='input w-full' type="email" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Password</label>
                    <input className='input w-full' type="password" />
                </div>
                <div className='my-3 text-center '>
                    <button className='btn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login