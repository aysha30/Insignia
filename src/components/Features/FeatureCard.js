import React from 'react'

const FeatureCard = ({ title, content, d }) => {
    return (
        <>
            <div className='p-5 sm:px-10 sm:py-5 '>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={0.4}>
                        <path className='shadow-gray-800' strokeLinecap="round" strokeLinejoin="round" d={d} />
                    </svg>
                </div>
                <div className='text-2xl text-blue text-left font-bold normal-case break-words pt-5'>
                    {title}
                </div>
                <div className='flex flex-wrap text-md text-white text-left font-thin break-words py-5 mb-2 sm:mb-0'>
                    {content}
                </div>
                <button
                    href="#"
                    className="flex flex-inline hover:text-blue text-blue text-md rounded-md font-thin py-7"
                >
                    Learn more &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 30 24" stroke="#9151fe" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default FeatureCard;