import { FaEdit } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Modal } from 'react-responsive-modal';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import { useForm } from "react-hook-form"

const UserProfile = () => {

    // Personal Information
    const [piOpen, piSetOpen] = useState(false);
    const onPiOpenModal = () => piSetOpen(true);
    const onPiCloseModal = () => piSetOpen(false);


    const {
        register: registerPI,
        handleSubmit: handlePISubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onPersonalInformation = (data) => {
        console.log(data)
    }

    return (
        <div className='lg:mx-32'>
            <div className='h-40 w-full bg-[#307bc4]'>
            </div>
            <div className='w-32 -mt-10'>
                <img src="https://i.ibb.co.com/WcTWxsN/nav-img.png" alt="" />
            </div>
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Personal Information</Tab>
                        <Tab>Professional  Information</Tab>
                        <Tab>Education</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Certifications & Training</Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            <div onClick={onPiOpenModal} className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                                <FaEdit />
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-5'>
                                <div>
                                    <label htmlFor="">Name:</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>Kalidash Odekare</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>kalidashodekare14@gmail.com</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Role</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Phone Number</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>+8801754875698</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Address</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>Dhaka,Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                            <div>
                                <label htmlFor="">Current Job Title:</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>Web Developer</p>
                                </div>
                                {/* <div className=''>
                            <select className='w-full p-3'>
                                <option value="Student"></option>
                                <option value="Student">Frontend Developer</option>
                                <option value="Student">Backend Developer</option>
                                <option value="Teacher">Web Developer</option>
                                <option value="Developer">MERN Stack Developer</option>
                                <option value="Designer">Full Stack Developer</option>
                                <option value="Designer">Software Developer</option>
                                <option value="Designer">Software Engineer</option>
                            </select>
                        </div> */}
                            </div>
                            <div>
                                <label htmlFor="">Work Experience</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>1 Years</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Skill</label>
                                <div className='border border-[#bbb] p-3'>
                                    <div className='grid grid-cols-4 gap-3'>
                                        <p>React.js</p>
                                        <p>Next.js</p>
                                        <p>Node.js</p>
                                        <p>Express.js</p>
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                            <div>
                                <label htmlFor="">Degree Name:</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">University/Institution</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>1 Years</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">Year of Passing</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>1 Years</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="">GPA/Percentage</label>
                                <div className='border border-[#bbb] p-3'>
                                    <p>1 Years</p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>

                        </div>
                    </TabPanel>
                </Tabs>
                {/* Personal Inforamtion */}
                <Modal open={piOpen} onClose={onPiCloseModal} center>
                    <form onSubmit={handlePISubmit(onPersonalInformation)} className='my-5 lg:w-72'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Name:</label>
                            <input {...registerPI("name")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Email:</label>
                            <input {...registerPI("email")} className='input w-full' type="email" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Phone:</label>
                            <input {...registerPI("phone_number")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Address:</label>
                            <input {...registerPI("address")} className='input w-full' type="text" />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default UserProfile