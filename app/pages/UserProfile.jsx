import { FaCamera, FaEdit } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Modal } from 'react-responsive-modal';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-modal/styles.css';
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import Select from 'react-select';
import { IoMdAdd, IoMdCamera } from "react-icons/io";
import useAxiosSecure from '../hooks/useAxiosSecure'
import { authContext } from '../AuthProvider/AuthProvider'
import { Link } from 'react-router';


const UserProfile = () => {

    const { user } = useContext(authContext)
    const [skills, setSkills] = useState([])
    const axiosSecure = useAxiosSecure()
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
    const [userData, setUserData] = useState([])
    const [imgHostLoading, setImgHostLoading] = useState(false)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axiosSecure.get(`/user-profile/${user?.email}`)
                console.log(res.data)
                setUserData(res.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchProfile()
    }, [user?.email])


    console.log('checking email', user?.email)

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

    const onPersonalInformation = async (data) => {
        try {
            console.log(data)
            const pIData = {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                address: data.address
            }
            const res = await axiosSecure.patch(`/user_personal_information/${user?.email}`, pIData)
            console.log(res.data)
            if (res.modifiedCount > 0) {
                piSetOpen(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Professional Information Form
    const {
        register: registerPro,
        handleSubmit: handleProSubmit,
        formState: { errorsPro },
    } = useForm()

    const onProfessionalInformation = async (data) => {
        console.log(data)
        try {
            const proData = {
                job_title: data.job_title,
                work_experience: data.work_experience,
                skills: skills.map(skill => skill.value)
            }
            const res = await axiosSecure.patch(`/user_professional_information/${user?.email}`, proData)
            console.log(res.data)
            if (res.modifiedCount > 0) {
                piSetOpen(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Education Form
    const {
        register: registerEdu,
        handleSubmit: handleEduSubmit,
        formState: { errorsEdu },
    } = useForm()

    const onEducation = async (data) => {
        try {
            console.log(data)
            const educationInfo = {
                degree_name: data.degree_name,
                university: data.university,
                year_of_passing: data.year_of_passing,
                gpa: data.gpa
            }
            const res = await axiosSecure.patch(`/user_education/${user?.email}`, educationInfo)
            console.log(res.data)
            if (res.modifiedCount > 0) {
                piSetOpen(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    // Projects Form
    const {
        register: registerProj,
        handleSubmit: handleProjSubmit,
        formState: { errorsProj },
    } = useForm()

    const onProjects = async (data) => {
        console.log(data)
        const projectInfo = {
            project_title: data.project_title,
            project_description: data.project_description,
            live_link: data.live_link,
            github_link: data.github_link
        }
        const res = await axiosSecure.post(`/projectsAdd/${user?.email}`, projectInfo)
        console.log(res.data)
        if (res.modifiedCount > 0) {
            piSetOpen(false)
        }
    }

    // Certifications & Training Form
    const {
        register: registerCert,
        handleSubmit: handleCertSubmit,
        formState: { errorsCert },
    } = useForm()

    const onCertifications = async (data) => {
        console.log(data)
        try {
            const certificatInfo = {
                certificate_name: data.certificate_name,
                online_courses: data.online_courses
            }
            const res = await axiosSecure.patch(`/certificationAndTraining/${user?.email}`, certificatInfo)
            console.log(res.data)
            if (res.modifiedCount > 0) {
                piSetOpen(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleUploadImage = async (file) => {
        try {
            setImgHostLoading(true)
            const formData = new FormData();
            formData.append("image", file)

            const res = await axiosSecure.post(`/upload-image/${user?.email}`, formData)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setImgHostLoading(false)
        }
    }

    return (
        <div className='lg:mx-32'>
            <div className='h-40 w-full bg-[#307bc4]'>
            </div>
            <div className='relative  w-32 h-32 rounded-full -mt-10'>
                {
                    userData?.image ? (
                        <div className='z-10 h-32'>
                            <img className='rounded-full w-full h-full' src={userData?.image} alt="" />
                        </div>
                    ) : (
                        <div className='z-10'>
                            <img className='w-full h-full' src="https://i.ibb.co.com/WcTWxsN/nav-img.png" alt="" />
                        </div>
                    )
                }
                {
                    imgHostLoading ? (
                        <div className='bg-[#307bc4] text-white rounded-full z-20 absolute bottom-0 right-0 cursor-pointer'>
                            <span className="loading loading-spinner w-10 h-10"></span>
                        </div>
                    ) : (
                        <div>
                            <div onClick={() => document.querySelector('input[type="file"]').click()} className='z-20 absolute bottom-0 right-0 cursor-pointer bg-white rounded-full p-2'>
                                <FaCamera className='text-3xl text-[#307bc4]' />
                                <input onChange={(e) => handleUploadImage(e.target.files[0])} hidden type="file" name="" id="" />
                            </div>
                        </div>

                    )
                }
            </div>
            <div className='font-rubik my-10'>
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
                                        <p>{userData?.name || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Email</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.email || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Role</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.role}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Phone Number</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.phone_number || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Address</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.address || "N/A"}</p>
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
                                        <p>{userData?.job_title || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Work Experience</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.work_experience || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Skill</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <div className='grid grid-cols-4 gap-3'>
                                            {
                                                userData?.skills ? (
                                                    userData?.skills.map((skill, index) => (
                                                        <p key={index}>{skill}</p>
                                                    ))
                                                ) : (
                                                    "N/A"
                                                )
                                            }
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
                                        <p>{userData?.degree_name || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">University/Institution</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.university || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Year of Passing</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.year_of_passing || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">GPA/Percentage</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.gpa || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='flex justify-end items-end text-2xl px-5 cursor-pointer'>
                            <IoMdAdd onClick={onProjOpenModal} />
                        </div>
                        <div className='space-y-5'>
                            {
                                userData?.projects?.length > 0 && userData?.projects.map(project => (
                                    <div key={project._id} className='border-b border-[#bbb] font-rubik  pb-5 space-y-3'>
                                        <h1 className='font-medium'>{project?.project_title}</h1>
                                        <p className='whitespace-pre-wrap overflow-hidden break-words'>{project?.project_description}</p>
                                        <p className='font-medium'>
                                            Live Link: <Link to={project?.live_link}>{project?.live_link}</Link>
                                        </p>
                                        <p className='font-medium'>
                                            GitHub Link: <Link to={project?.live_link}>{project?.github_link}</Link>
                                        </p>
                                    </div>
                                ))
                            }

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
                                        <p>{userData?.online_courses || "N/A"}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Certificate Name & Organization:</label>
                                    <div className='border border-[#bbb] p-3'>
                                        <p>{userData?.certificate_name || "N/A"}</p>
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
                            <input {...registerPI("name")} defaultValue={userData?.name} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Email:</label>
                            <input {...registerPI("email")} defaultValue={userData?.email} className='input w-full' type="email" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Phone:</label>
                            <input {...registerPI("phone_number")} defaultValue={userData?.phone_number} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Address:</label>
                            <input {...registerPI("address")} defaultValue={userData?.address} className='input w-full' type="text" />
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
                                <select {...registerPro("job_title")} defaultValue={userData?.job_title} className='w-full p-3'>
                                    <option disabled value={""} >Please Select</option>
                                    <option value="Frontend Developer">Frontend Developer</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Web Developer">Web Developer</option>
                                    <option value="MERN Stack Developer">MERN Stack Developer</option>
                                    <option value="Full Stack Developer">Full Stack Developer</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Software Engineer">Software Engineer</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Work Experience:</label>
                            <input {...registerPro("work_experience")} defaultValue={userData?.work_experience || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Skill:</label>
                            <Select
                                isMulti
                                defaultInputValue={userData?.skills || "N/A"}
                                onChange={(e) => setSkills(e)}
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
                            <input {...registerEdu("degree_name")} defaultValue={userData?.degree_name || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">University/Institution:</label>
                            <input {...registerEdu("university")} defaultValue={userData?.university || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Year of Passing:</label>
                            <input {...registerEdu("year_of_passing")} defaultValue={userData?.year_of_passing || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">GPA/Percentage:</label>
                            <input {...registerEdu("gpa")} defaultValue={userData?.gpa || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
                {/* Projects */}
                <Modal open={projOpen} onClose={onProjCloseModal} center>
                    <form onSubmit={handleProjSubmit(onProjects)} className='my-5 lg:w-[600px] space-y-3'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Project Title:</label>
                            <input {...registerProj("project_title")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Project Description:</label>
                            <textarea {...registerProj("project_description")} className='overflow-auto break-words resize-y whitespace-normal input w-full h-40' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Live Link:</label>
                            <input {...registerProj("live_link")} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">GitHub Link:</label>
                            <input {...registerProj("github_link")} className='input w-full' type="text" />
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
                            <input {...registerCert("online_courses")} defaultValue={userData?.online_courses || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label htmlFor="">Certificate Name & Organization:</label>
                            <input {...registerCert("certificate_name")} defaultValue={userData?.certificate_name || "N/A"} className='input w-full' type="text" />
                        </div>
                        <div className='text-center my-5'>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </form>
                </Modal>
            </div>
        </div >
    )
}

export default UserProfile