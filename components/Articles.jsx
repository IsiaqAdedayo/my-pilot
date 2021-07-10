import React from 'react';
import Image from 'next/image'

const Articles = () => {
    return (
        <div className="flex bg-white pb-10">
            <div className="flex flex-col pt-10 p-3 md:grid md:grid-cols-2 md:w-full md:py-5">
                <div className="flex flex-col text-blue-800 md:border-blue-800 md:border-r-2 md:h-screen md:sticky md:top-0 md:grid md:grid-rows-2 md:p-5">
                    <h1 className="text-lg font-bold">Articles</h1>
                    <div className="">
                        <p className="text-xl pb-4">What can we learn from Amazon's London Hair Salon?</p>
                            <div className="h-1/2">
                                <Image 
                                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/05/ego-hair-salon-with-beauty-beijing-2020-1-60000f49b212e.jpeg"
                                    layout="responsive"
                                    width="100"
                                    height="45"
                                />
                            </div>
                    </div>
                </div>

                <div className="grid grid-cols-2  py-8 text-blue-800">
                    <div className="h-full w-full grid grid-rows-2 border-r border-blue-800 p-2">
                        <div className="flex flex-col border-b border-blue-800 cursor-pointer group">
                            <h1 className="text-center font-bold">IOS14.5 what's all the panic about</h1>
                            <div className="mt-40 scale-y-0 transition duration-100 transform group-hover:scale-y-75">
                                <Image 
                                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/960x0-768x508.jpeg"
                                    layout="responsive"
                                    width="100"
                                    height="100"
                                    
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col border-b border-blue-800">
                            
                        </div>
                    </div>
                    
                    <div className="h-full w-full grid grid-rows-2 p-2">
                        <div className=" flex flex-col border-b border-blue-800">
                            
                        </div>
                        <div className="flex flex-col pt-2 border-b border-blue-800 cursor-pointer group">
                            <h1 className="text-center font-bold">IOS14.5 what's all the panic about</h1>
                            <div className="mt-40 scale-y-0 transition duration-100 transform group-hover:scale-y-75">
                                <Image 
                                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/960x0-768x508.jpeg"
                                    layout="responsive"
                                    width="100"
                                    height="120"
                                    
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-full w-full grid grid-rows-2 border-r border-blue-800 p-2">
                        <div className="flex flex-col border-b border-blue-800 cursor-pointer group">
                            <h1 className="text-center font-bold">IOS14.5 what's all the panic about</h1>
                            <div className="mt-40 scale-y-0 transition duration-100 transform group-hover:scale-y-75">
                                <Image 
                                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/960x0-768x508.jpeg"
                                    layout="responsive"
                                    width="100"
                                    height="120"
                                    
                                />
                            </div>
                        </div>
                        <div className=" flex flex-col">
                            
                        </div>
                    </div>
                    
                    <div className="h-full w-full grid grid-rows-2 p-2">
                        <div className=" flex flex-col border-b border-blue-800">
                            
                        </div>
                        <div className="flex flex-col pt-2 cursor-pointer group">
                            <h1 className="text-center font-bold">IOS14.5 what's all the panic about</h1>
                            <div className="mt-40 scale-y-0 transition duration-100 transform group-hover:scale-y-75">
                                <Image 
                                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/960x0-768x508.jpeg"
                                    layout="responsive"
                                    width="100"
                                    height="120"
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
