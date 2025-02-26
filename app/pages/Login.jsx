import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import useAxiosSecure from '../hooks/useAxiosSecure'
import { authContext } from '../AuthProvider/AuthProvider'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const Login = () => {

    const axiosSecure = useAxiosSecure()
    const { userLoginSystem } = useContext(authContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const userInfo = {
                email: data.email,
                password: data.password
            }
            const fireLogin = await userLoginSystem(data.email, data.password)
            console.log(fireLogin.user)

            const res = await axiosSecure.post('/user-login', userInfo)
            if (res.data.success) {
                console.log(res.data)
                localStorage.setItem('token', res.data.data.token)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Success",
                    showConfirmButton: false,
                    timer: 1500,
                })
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        } finally {

        }

    }

    return (
        <div className='flex justify-center items-center h-[600px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-[#ddd] w-96 p-3'>
                <h1 className='text-3xl text-center'>Login</h1>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Email</label>
                    <input {...register("email")} className='input w-full' type="email" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Password</label>
                    <input {...register("password")} className='input w-full' type="password" />
                </div>
                <div className='my-3 text-center '>
                    <button type='submit' className='btn'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login