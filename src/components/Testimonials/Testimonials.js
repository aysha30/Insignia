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
        </>
    )
}

export default Testimonials;