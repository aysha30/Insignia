
import React from 'react';
import intropng from './introsvg.png';
import securitypng from './security.png';

function Intro() {
    return (
        <>
            <div className="flex-row lg:flex place-content-around">
                <div className="flex-grow place-content-around p-10">
                    <div className="text-5xl sm:text-6xl font-bold text-blue text-left normal-case break-words">
                        Save your data
                        storage here.
                    </div>
                    <div className="py-10 text-lg text-white text-left font-light break-words">
                        Insignia is a data storage are that has been tested for
                        security, so you can store your data here safely but not be
                        afraid of being stolen by others.
                    </div>
                    <div className="text-white text-left">
                        <button className="hover:shadow-md hover:border font-xl hover:text-blue py-6 px-12 rounded-full shadow-xl">
                            <div className='text-2xl'>
                                Learn more</div>
                        </button>
                    </div>
                </div>
                <div className="flex-grow p-10">
                    <img className='md:h-500' src={intropng} alt="intro" />
                </div>
            </div>
            <div className='py-10 sm:py-32'>
                <div className="bg-midnight flex-row lg:flex place-content-around rounded-4xl shadow-inner p-2">
                    <div className="flex-grow place-content-around p-10">
                        <img src={securitypng} alt="security" />
                    </div>
                    <div className="flex-grow place-content-around p-10">
                        <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case break-words'>
                            We are a high-level data storage bank
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
                    </div>
                </div>
            </div>

        </>
    );
}

export default Intro;