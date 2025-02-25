import { FaEdit } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Modal } from 'react-responsive-modal';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import Select from 'react-select';
import { IoMdAdd } from "react-icons/io";



const UserProfile = () => {

    const options = [
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React.js', label: 'React.js' },
        { value: 'Next.js', label: 'Next.js' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'Express.js', label: 'Express.js' },
        { value: 'MongoDB.js', label: 'MongoDB.js' }
    ]

    // Personal Information
    const [piOpen, piSetOpen] = useState(false);
    const onPiOpenModal = () => piSetOpen(true);
    const onPiCloseModal = () => piSetOpen(false);

    // Professional Information
    const [proOpen, proSetOpen] = useState(false);
    const onProOpenModal = () => proSetOpen(true);
    const onProCloseModal = () => proSetOpen(false);

    // Education
    const [eduOpen, eduSetOpen] = useState(false);
    const onEduOpenModal = () => eduSetOpen(true);
    const onEduCloseModal = () => eduSetOpen(false);

    // Projects
    const [projOpen, projSetOpen] = useState(false);
    const onProjOpenModal = () => projSetOpen(true);
    const onProjCloseModal = () => projSetOpen(false);

    // Certifications & Training
    const [certOpen, certSetOpen] = useState(false);
    const onCertOpenModal = () => certSetOpen(true);
    const onCertCloseModal = () => certSetOpen(false);


    // Personal Information Form
    const {
        register: registerPI,
        handleSubmit: handlePISubmit,
        formState: { errorsPI },
    } = useForm()

    const onPersonalInformation = (data) => {
        console.log(data)
    }

    // Professional Information Form
    const {
        register: registerPro,
        handleSubmit: handleProSubmit,
        formState: { errorsPro },
    } = useForm()

    const onProfessionalInformation = (data) => {
        console.log(data)
    }

    // Education Form
    const {
        register: registerEdu,
        handleSubmit: handleEduSubmit,
        formState: { errorsEdu },
    } = useForm()

    const onEducation = (data) => {
        console.log(data)
    }

    // Projects Form
    const {
        register: registerProj,
        handleSubmit: handleProjSubmit,
        formState: { errorsProj },
    } = useForm()

    const onProjects = (data) => {
        console.log(data)
    }

    // Certifications & Training Form
    const {
        register: registerCert,
        handleSubmit: handleCertSubmit,
        formState: { errorsCert },
    } = useForm()

    const onCertifications = (data) => {
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
                            <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                                <FaEdit onClick={onPiOpenModal} />
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
                        <div>
                            <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                                <FaEdit onClick={onProOpenModal} />
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                                <div>
                                    <label htmlFor="">Current Job Title:</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>Web Developer</p>
                                    </div>
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
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                                <FaEdit onClick={onEduOpenModal} />
                            </div>
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
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                            <IoMdAdd onClick={onProjOpenModal} />
                        </div>
                        <div>

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                                <FaEdit onClick={onCertOpenModal} />
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                                <div>
                                    <label htmlFor=""> Online Courses: </label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Certificate Name & Organization:</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>1 Years</p>
                                    </div>
                                </div>
                            </div>
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
                {/* Professional Inforamtion */}
                <Modal open={proOpen} onClose={onProCloseModal} center>
                    <form onSubmit={handleProSubmit(onProfessionalInformation)} className='my-5 lg:w-96'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Current Job Title:</label>
                            <div className=''>
                                <select className='w-full p-3'>
                                    <option disabled value={""} >Please Select</option>
                                    <option value="Student">Frontend Developer</option>
                                    <option value="Student">Backend Developer</option>
                                    <option value="Teacher">Web Developer</option>
                                    <option value="Developer">MERN Stack Developer</option>
                                    <option value="Designer">Full Stack Developer</option>
                                    <option value="Designer">Software Developer</option>
                                    <option value="Designer">Software Engineer</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Work Experience:</label>
                            <input {...registerPro("work_experience")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Skill:</label>
                            <Select
                                isMulti
                                name="colors"
                                options={options}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                {/* Education */}
                <Modal open={eduOpen} onClose={onEduCloseModal} center>
                    <form onSubmit={handleEduSubmit(onEducation)} className='my-5 lg:w-96 space-y-3'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Degree Name:</label>
                            <input {...registerEdu("degree_name")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">University/Institution:</label>
                            <input {...registerEdu("university")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Year of Passing:</label>
                            <input {...registerEdu("year_of_passing")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">GPA/Percentage:</label>
                            <input {...registerEdu("gpa")} className='input w-full' type="text" />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                {/* Projects */}
                <Modal open={projOpen} onClose={onProjCloseModal} center>
                    <form onSubmit={handleProjSubmit(onProjects)} className='my-5 lg:w-[500px] space-y-3'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Project Title:</label>
                            <input {...registerProj("project_title")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Project Description:</label>
                            <textarea {...registerProj("project_description")} className='input w-full h-40' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Live Link:</label>
                            <input {...registerProj("project_link")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">GitHub Link:</label>
                            <input {...registerProj("project_link")} className='input w-full' type="text" />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                {/* Certifications & Training */}
                <Modal open={certOpen} onClose={onCertCloseModal} center>
                    <form onSubmit={handleCertSubmit(onCertifications)} className='my-5 lg:w-96 space-y-3'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Online Courses:</label>
                            <input {...registerCert("online_courses")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Certificate Name & Organization:</label>
                            <input {...registerCert("certificate_name")} className='input w-full' type="text" />
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