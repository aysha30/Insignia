import React from 'react'
import mobilejpg from './mobilejpg.JPG'

function Download() {
    return (
        <>
            <div className='py-10 sm:py-32'>
                <div className="bg-midnight flex-row lg:flex place-content-around rounded-4xl shadow-inner p-2">
                    <div className="flex-grow place-content-around p-10">
                        <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case break-words'>
                            Download Our App
                        </div>
                        <div className='py-10 text-lg text-white text-left font-thin break-words'>
                            The place to store various data that you can access
                            at any time through the Internet and where you can
                            carry it. <br />
                            This very flexible storage area has a high level of
                            security. To enter into your own data you must enter
                            the password that you created when you registered in
                            this Data Warehouse.
                        </div>
                        <div className="text-white font-inter">
                            <button className="bg-gray-900 hover:shadow-md font-bold hover:text-blue py-5 px-10 rounded-full shadow-xl">
                                <div className='text-lg'>
                                    Download</div>
                            </button>
                        </div>
                    </div>
                    <div className="flex-grow place-content-around p-10 hidden lg:block ">
                        <img className='rounded-4xl sm:rounded-3xl rotate-[25deg] hover:rotate-[15deg] transform lg:scale-[1.20]' src={mobilejpg} alt="mobilejpg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Download;