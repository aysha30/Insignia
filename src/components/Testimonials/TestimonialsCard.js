import React from 'react'

const TestimonialsCard = ({ name, profession, rating, id, content }) => {
    return (
        <>
            <div className='p-5 h-auto sm:px-10 sm:py-5'>
                <div className="flex place-content-around">
                    <div className="place-content-around">
                        <img className='bg-white grayscale w-20 h-20 rounded-full' src={`https://robohash.org/${id}?set=set4`} alt="profile" />
                    </div>
                    <div className="place-content-around px-2">
                        <div className='text-md text-blue font-bold'>
                            {name}
                        </div>
                        <div className='flex flex-inline text-xs text-lilac text-left font-thin'>
                            <div className='text-xs text-lilac text-left font-thin pr-3'>
                                {profession}
                            </div>
                            <div className='text-md text-white text-left font-thin'>
                                <ul className="flex flex-inline">
                                    {[...Array(5).keys()].map((x, i) => (
                                        <li key={i}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={(x < rating) ? "#35eae2" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.1}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                            </svg>
                                        </li>
                                    )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className='flex-wrap w-56 text-sm text-white text-left font-thin break-words'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsCard;