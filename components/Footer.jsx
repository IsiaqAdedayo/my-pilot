import Image from 'next/image'

const Footer = () => {
    return (
        <div className="flex flex-col bg-black text-white md:h-screen">
            <div className="p-2 md:p-6">
                <h1 className="text-xl md:text-4xl md:w-5/12 font-serif font-thin">A human-centred approach to digital marketing</h1>
                <u className="text-lg md:text-2xl">Learn more</u>
            </div>

            <div className="p-12 md:w-3/12 md:ml-mlc md:p-2 md:mb-20">
                <Image 
                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/summit_jumper-light_grey_marle_1738_1180x1770.jpeg"
                    layout="responsive"
                    width="70"
                    height="80"
                />
            </div>

            <div className="flex justify-between pb-2 px-2">
                <p className="md:mt-10">&copy; 2021</p>

                <div className="hidden md:inline-flex flex-col items-center text-center">
                    <div>Logo</div>
                    <div className="flex">
                        <a className="hover:text-blue-800 font-bold" href="tel:+2348091163372">08091163372</a> 
                        &nbsp; <span className="font-extrabold">.</span> &nbsp;
                        <a className="hover:text-blue-800 font-bold uppercase" href="mailto:hadedaryor@gmail.com">hadedaryor@gmail.com</a>
                    </div>
                    <a className="hover:text-blue-800" href="https://www.linkedin.com/in/showande-adedayo-789a42195/">Linkedin</a>
                </div>

                <p className="md:mt-10">BACK TO TOP</p>
            </div>
        </div>
    )
}

export default Footer
