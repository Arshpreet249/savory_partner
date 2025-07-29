import React from 'react'
import ProfileImg from '../assets/images/profileimg.jpg'
import { useOutletContext } from 'react-router-dom'
import { Pencil } from 'lucide-react'
import BG from '../assets/images/bg.jpg'
import Background from '../assets/images/background.jpg'
const Profile = () => {

    const { user, setUser } = useOutletContext();

    return (
        <div className='w-full h-screen   '>

            <div className='flex items-center justify-center gap-10 p-4'>
                <div className=' w-full h-auto rounded-2xl shadow-xl '>
                    <div className='flex flex-col items-center justify-center rounded-t-2xl py-4 ' style={{backgroundImage: `url(${Background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                        <div className='relative'>
                            <img className='object-cover border-white shadow-md rounded-full w-32 h-32' src={ProfileImg} alt="Profileimg" />
                            <div className='absolute bottom-2 right-2 rounded-full bg-[#780000] p-1 shadow-md'>
                                <Pencil size={16} className='text-white' />
                            </div>
                        </div>
                        <h2 className='py-2 text-xl font-semibold text-white'>
                            {user?.first_name} {user?.last_name}
                        </h2>
                    </div>
                    <div className='py-4 px-8'>
                        <div className='p-4'>
                            <h1 className='text-xl font-semibold'>Account</h1>
                            <p className='text-gray-600 py-2'>View and change your account prefrence</p>
                        </div>

                        <form
                            className="w-full px-4 sm:px-6 md:px-8 bg-white rounded-xl p-10 md:p-8 mb-10 shadow-2xl space-y-6 "
                        >
                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
                                <input type="text"
                                    placeholder='Firstname'
                                    defaultValue={user?.first_name}
                                    className='w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />

                                <input type="text"
                                    placeholder='Lastname'
                                    defaultValue={user?.last_name}
                                    className='w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />


                            </div>
                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
                                <input type="email"
                                    placeholder='Email'
                                    defaultValue={user?.email}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />
                                <input type="tel"
                                    placeholder="123-45-678"
                                    defaultValue={user?.mobile}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />

                            </div>

                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
                                <input type="text"
                                    placeholder="dateofbirth"
                                    defaultValue={user?.date_of_birth}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />
                                <input type="text"
                                    placeholder='address'
                                    defaultValue={user?.address_line_1}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />


                            </div>

                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
                                <input type="text"
                                    placeholder="address 2"

                                    defaultValue={user?.address_line_2}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />
                                <input type="text"
                                    placeholder='city'
                                    defaultValue={user?.city}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />


                            </div>
                            <div className='flex flex-col md:flex-row gap-4 md:gap-8 '>
                                <input type="text"
                                    placeholder="state"

                                    defaultValue={user?.state}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />
                                <input type="text"
                                    placeholder='pincode'
                                    defaultValue={user?.pin_code}
                                    className='w-full  px-4 py-2 rounded-md bg-transparent border border-gray-400 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#003049]'
                                />


                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit"
                                    className="w-auto px-8 py-3 bg-[#003049] hover:bg-[#0075A2] text-white font-semibold rounded-md transition duration-200">
                                    Edit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile