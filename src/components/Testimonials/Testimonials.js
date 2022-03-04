import React from 'react'
import TestimonialsCard from './TestimonialsCard';

function Testimonials() {
    const testimonialsList = [
        {
            id: 1,
            name: "John Doe",
            profession: "UI Designer",
            rating: 1,
            content: "Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
        },
        {
            id: 2,
            name: "Korem Ipsum",
            profession: "UI Designer",
            rating: 5,
            content: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
        },
        {
            id: 3,
            name: "Jenny Code",
            profession: "UI Designer",
            rating: 3,
            content: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
        },
        {
            id: 4,
            name: "Seline Sharma",
            profession: "UI Designer",
            rating: 4,
            content: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
        },
    ];
    return (
        <>
            <div className='py-10 sm:py-30'>
                <div className="bg-midnight place-content-around rounded-4xl shadow-inner p-5 sm:py-10 sm:px-20">
                    <div className="place-content-around p-10">
                        <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case break-words'>
                            Testimonials
                        </div>
                    </div>
                    <div
                        className='flex flex-no-wrap overflow-x-scroll whitespace-pre-line items-stretch pb-8'
                    >
                        {testimonialsList.map(item => (
                            <div key={item.id}
                                className='bg-gray-900 flex-none w-2/2 lg:w-1/2 mr-8 md:pb-4 rounded-4xl shadow shadow-card'
                            >
                                <TestimonialsCard id={item.id} name={item.name} profession={item.profession} rating={item.rating} content={item.content} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=''>
                <div className="flex-row lg:flex place-content-around">
                    <div className="flex-grow place-content-around">
                        <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case'>
                            Subscribe !
                        </div>
                        <div className='py-10 text-lg text-white text-left font-thin break-words'>
                            Join our newsletter to never miss any latest news.
                        </div>
                    </div>
                    <div className="flex items-center grid grid-cols-1 justify-items-center xl:justify-items-end flex-grow">
                        <div className=" ">
                            <div class="bg-midnight rounded-4xl shadow-inner hover:shadow-gray-800 input-group relative flex inline-flex items-stretch p-4">
                                <input type="email" className="form-control relative bg-transparent text-white font-inter font-thin flex-auto min-w-0 block w-full px-3 py-1.5 transition ease-in-out m-0 hover:text-white focus:text-white focus:outline-none"
                                    placeholder="Enter your e-mail address here" aria-label="Email" aria-describedby="button-addon3" />
                                <button
                                    // hover:shadow-md hover:border font-xl hover:text-blue py-6 px-12 rounded-full shadow-xl
                                    className="btn bg-gray-900 hover:shadow-md font-thin text-white hover:text-blue rounded-full shadow-xl px-3 py-3 focus:outline-none transition duration-150 ease-in-out w-40"
                                    type="button" id="button-addon3">Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;