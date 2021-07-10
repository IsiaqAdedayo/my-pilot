import Image from "next/image"
// import LineB from '../components/LineB';

const Banner = () => {
    return (
        <div className="flex flex-col my-7 relative">

            <div className="absolute top-20 md:left-8 z-10 text-blue-700  p-4 md:sticky md:top-52 md:flex flex-col justify-center items-center">
                <h1 className="text-3xl md:w-4/5 md:text-6xl lg:text-7xl md:text-center font-serif font-thin">We help brands grow <br /> awareness and increase <br /> sales</h1>
                <u className="text-lg text-center ml-20 md:ml-0">Learn more</u>
                <div className="absolute flex justify-around w-full -bottom-20">
                    <span className="h-px bg-blue-700 w-2/5"></span>
                    <span className="h-px bg-red-700 w-2/5"></span>
                </div>
            </div>


            <div className="w-4/5 md:w-3/5 ml-auto md:mt-md">
                <Image 
                    src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/03/r3baWJkc-scaled.jpeg"
                    layout="responsive"
                    width="100"
                    height="160"
                />
            </div>

            

        </div>
    )
}

export default Banner
