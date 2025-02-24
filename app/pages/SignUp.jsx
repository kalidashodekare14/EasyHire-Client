import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { authContext } from '../AuthProvider/AuthProvider'
import useAxiosPublic from '../hooks/useAxiosPublic'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate()
    const [isRole, setIsRole] = useState(null)
    const [isStudent, setIsStudent] = useState(false)
    const [isRecruiter, setIsRecruiter] = useState(false)
    const { userRegisterSystem } = useContext(authContext)
    const axiosPublic = useAxiosPublic()
    const [processing, setProcessing] = useState(false)

    const handleStudent = () => {
        setIsStudent(!isStudent)
        if (!isStudent) {
            setIsRecruiter(false)
            setIsRole('student')
        }
    }

    const handleRecruiter = () => {
        setIsRecruiter(!isRecruiter)
        if (!isRecruiter) {
            setIsStudent(false)
            setIsRole('recruiter')
        }
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log(data)
            const userInfo = {
                name: data.name,
                email: data.email,
                password: data.password,
                role: isRole
            }
            userRegisterSystem(data.email, data.password)
                .then(async (res) => {
                    try {
                        setProcessing(true)
                        console.log(res.user)
                        const userRes = await axiosPublic.post(`/api/user/register`, userInfo)
                        console.log(userRes)
                        if (userRes.data.success) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    } catch (error) {
                        console.log(error)
                    } finally {
                        setProcessing(false)
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='flex justify-center items-center h-[600px]'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-[#ddd] w-96 p-3 space-y-3'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Name</label>
                    <input {...register("name")} className='input w-full' type="text" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Email</label>
                    <input {...register("email")} className='input w-full' type="email" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Password</label>
                    <input {...register("password")} className='input w-full' type="password" />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="">Role</label>
                    <div className='flex items-center gap-5'>
                        <div onClick={handleStudent} className='flex items-center gap-1'>
                            <input type="checkbox" readOnly checked={isStudent} className="checkbox" />
                            <p>Student</p>
                        </div>
                        <div onClick={handleRecruiter} className='flex items-center gap-1'>
                            <input type="checkbox" readOnly checked={isRecruiter} className="checkbox" />
                            <p>Recruiters</p>
                        </div>
                    </div>
                </div>
                <div className='my-3 text-center '>
                    <button type='submit' className='btn'>
                        {
                            processing ? 'Processing...' : 'Sign Up'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register