import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex-row lg:flex place-content-around">
                <div className="flex-grow place-content-around">
                    <div className='text-2xl sm:text-5xl font-bold text-blue text-left normal-case'>
                        Try for free!
                    </div>
                    <div className='py-10 text-lg text-white text-left font-thin break-words'>
                        Get limited 1 week fre try our features!
                    </div>
                </div>
                <div className="flex flex-wrap items-center grid grid-cols-2 justify-items-center xl:grid-cols-3 flex-grow">
                    <div className='hidden xl:block'></div>
                    <div>
                        <button className="hover:shadow-md hover:border text-white font-xl hover:text-blue py-4 px-6 rounded-full shadow-gray-800 inline-flex">
                            Learn more
                        </button>
                    </div>
                    <div>
                        <button className="hover:shadow-md hover:border text-lilac font-xl hover:text-blue py-4 px-6 rounded-full shadow-gray-800 inline-flex">
                            Request Demo
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7 pl-2" fill="none" viewBox="0 0 24 24" stroke="#9151fe" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-col-auto sm:grid-cols-4 flex flex-wrap items-start justify-items-start flex-grow mt-10'>
                <div className='flex flex-col pl-4'>
                    <div className="flex-shrink-0 inline-flex">
                        <img
                            className="h-12 w-12"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                        <div className="text text-blue text-2xl font-bold px-3 py-1">
                            Insignia
                        </div>
                    </div>
                    <div className='py-10 text-md text-blue font-thin break-words'>
                        Insignia Society, 234 <br />
                        Bahagia Ave Street  PRBW 29281 <br /><br />
                        info@insignia.com <br />
                        1-234-5678 (Main)<br /><br /><br />
                    </div>
                </div>
                <div className='flex flex-col pl-4'>
                    <div className='text-md text-blue font-thin break-words'>
                        About <br /><br />
                        Profile<br />
                        Feature<br />
                        Careers<br />
                        DW News<br /><br /><br />
                    </div>
                </div>
                <div className='flex flex-col pl-4'>
                    <div className='text-md text-blue font-thin break-words'>
                        Help<br /><br />
                        Support<br />
                        Sign up<br />
                        Guide<br />
                        Reports<br />
                        Q&A<br /><br /><br />
                    </div>
                </div>
                <div className='flex flex-col pl-4'>
                    <div className='text-md text-blue font-thin break-words'>
                        Social Media<br />
                    </div>
                    <div className='flex flex-row'>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
                            </svg>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
                            </svg>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;