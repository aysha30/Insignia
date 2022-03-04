/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Transition } from "@headlessui/react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="m-8 sm:pl-10">
                <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 inline-flex">
                                <img
                                    className="h-12 w-12"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <div className="text text-blue text-2xl font-bold px-3 py-1">Insignia</div>

                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        href="#"
                                        className="hover:text-blue text-blue text-lg px-3 py-2 rounded-md font-thin"
                                    >
                                        About
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white text-lg hover:bg-gray-700 hover:text-blue px-3 py-2 rounded-md font-thin"
                                    >
                                        Help
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white text-lg hover:bg-gray-700 hover:text-blue px-3 py-2 rounded-md font-thin"
                                    >
                                        Features
                                    </a>

                                    <a
                                        href="#"
                                        className="text-white text-lg hover:bg-gray-700 hover:text-blue px-3 py-2 rounded-md font-thin"
                                    >
                                        Signup
                                    </a>
                                    <button className="hover:shadow-md hover:border text-blue font-xl py-4 px-6 rounded-full shadow-xl inline-flex">
                                        Request Demo &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#9151fe" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a
                                    href="#"
                                    className="hover:text-blue text-white block px-3 py-2 rounded-md text-base font-thin"
                                >
                                    About
                                </a>

                                <a
                                    href="#"
                                    className="text-white text-base hover:text-blue block px-3 py-2 rounded-md text-base font-thin"
                                >
                                    Help
                                </a>

                                <a
                                    href="#"
                                    className="text-white text-base hover:text-blue block px-3 py-2 rounded-md text-base font-thin"
                                >
                                    Features
                                </a>

                                <a
                                    href="#"
                                    className="text-white text-base hover:text-blue block px-3 py-2 rounded-md text-base font-thin"
                                >
                                    Signup
                                </a>

                                <a
                                    href="#"
                                    className="text-white text-base hover:text-blue block px-3 py-2 rounded-md text-base font-thin"
                                >
                                    Request Demo
                                </a>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </>
    );
}

export default Navbar;