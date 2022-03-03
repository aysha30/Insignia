import React from 'react';
import FeatureCard from './FeatureCard';

function Features() {
    const featureList = [
        {
            id: 1,
            title: "Search Data",
            content: "Don't worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        },
        {
            id: 2,
            title: "Print Out",
            content: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
            d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        },
        {
            id: 3,
            title: "Security Code",
            content: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
        {
            id: 4,
            title: "Security Code",
            content: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        },
    ];

    return (
        <>
            <div className='py-10 sm:py-30'>
                <div className="bg-midnight place-content-around rounded-4xl shadow-inner p-5 sm:py-10 sm:px-20">
                    <div className="place-content-around p-10">
                        <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case break-words'>
                            Features
                        </div>
                    </div>
                    <div
                        className='flex flex-no-wrap overflow-x-scroll whitespace-pre-line items-stretch pb-8'
                    // className='flex flex-no-wrap scrolling-touch items-start mb-8'
                    >
                        {featureList.map(item => (
                            <div key={item.id}
                                className='bg-gray-900 flex-none h-auto w-2/3 lg:w-1/3 mr-8 md:pb-4 rounded-4xl shadow shadow-card'
                            // className='flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg+'
                            >
                                <FeatureCard title={item.title} content={item.content} d={item.d} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;