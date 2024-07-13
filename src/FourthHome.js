import React from "react";

const FourthHome = () => {
    return(
        <>
            <div className='bg-amber-100'>
                <div className='pt-10 pl-10 pb-20 pr-10 w-full'>
                    <form id='form'>
                    <h1 className='font-bold'>Contact Us:</h1>
                    <div className="flex">
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name:
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="name"
                                            id="fname"
                                            autoComplete="name"
                                            className="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Enter your Firstname..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span id='name_error'></span>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last Name:
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="name"
                                            id="lname"
                                            autoComplete="name"
                                            className="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Enter your Lastname..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 col-span-full">
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                            Message:
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="block w-1/3 rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Write Something Here..."
                            />
                        </div>
                    </div>
                    <div className="mt-6 items-center gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        > 
                        submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}

export default FourthHome