import Image from 'next/image'
import { useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Clients = () => {

    const [bgColor, setBgColor] = useState("bg-white");
    const [off, setOff] = useState(0);

    // const inputRef = useRef()

    // const handleScroll = () => {
    //     bg-blue-100
    // }

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <div className={` ${bgColor} flex flex-col pt-8 p-3 md:grid grid-cols-2 border-blue-800 border-b-2`}>
            <div className="flex flex-col border-b md:border-b-0 border-blue-800 md:border-blue-800  md:border-r-2 md:h-screen md:sticky md:top-0 md:grid grid-rows-2 md:p-6">
                <div>
                    <h1 className="text-2xl text-blue-800 font-serif font-thin">We take a bird’s eye view of digital marketing, operating as an extension of your team</h1>
                    {/* <p><button onClick={handleClick}>Try it</button></p>
                    <p>offsetTop is: {off}</p> */}
                </div>

                <div className="flex text-blue-800 py-12 pb-20 justify-between w-10/12 md:w-9/12">
                    <u href="#" className="text-lg font-bold">How we help</u>
                    <u href="#" className="text-lg font-bold">Our Clients</u>
                </div>
            </div>

            <div className="flex flex-col ml-auto w-9/12 md:w-8/12 pt-10">
                <ScrollAnimation animateIn='animate__zoomIn'
                    animateOut='animate__zoomOut'>
                    <div className="pb-24 pt-14 space-y-5">
                        <Image 
                            src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/Pilot_Client_Commercial-Bay-826x1024-2-768x952.jpg"
                            layout="responsive"
                            width="70"
                            height="80"
                        />
                        <div className="flex flex-col text-center items-center text-blue-800 md">
                            <h1 className="text-lg font-bold">Commercial Bay</h1>
                            <p className="font-serif font-thin">Our work with Commercial Bay to become Auckland's top food & retail precinct.</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn'
                    animateOut='animate__zoomOut'>
                    <div className="pb-24 space-y-5">
                        <Image 
                            src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/Christopher-Esber-1-826x1024-1.jpg"
                            layout="responsive"
                            width="70"
                            height="80"
                        />
                        <div className="flex flex-col text-center items-center text-blue-800">
                            <h1 className="text-lg font-bold">Christopher Esber</h1>
                            <p className="font-serif font-thin">We helped Christopher develop its direct-to-customer sales channel.</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn'
                    animateOut='animate__zoomOut'>
                    <div className="pb-24 space-y-5">
                        <Image 
                            src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/Mina_1-826x1024-1.jpg"
                            layout="responsive"
                            width="70"
                            height="80"
                        />
                        <div className="flex flex-col text-center items-center text-blue-800">
                            <h1 className="text-lg font-bold">Mina</h1>
                            <p className="font-serif font-thin">We helped Mina become top-of-mind ethical option.</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn'
                    animateOut='animate__zoomOut'>
                    <div className="pb-24 space-y-5">
                        <Image 
                            src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/Pilot-Client_Tosca-Salome-826x1024-2.jpg"
                            layout="responsive"
                            width="70"
                            height="80"
                        />
                        <div className="flex flex-col text-center items-center text-blue-800">
                            <h1 className="text-lg font-bold">Tosca & Salome</h1>
                            <p className="font-serif font-thin">Our work with boho-inspired boutique Tosca & Salome.</p>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn'
                    animateOut='animate__zoomOut'>
                    <div className="pb-10 md:pb-0 space-y-5">
                        <Image 
                            src="https://mk0pilotjps46rl7iol.kinstacdn.com/wp-content/uploads/2021/06/Caughley-1-826x1024-1.jpg"
                            layout="responsive"
                            width="70"
                            height="80"
                        />
                        <div className="flex flex-col text-center items-center text-blue-800">
                            <h1 className="text-lg font-bold">Caughley</h1>
                            <p className="font-serif font-thin">We helped Caughley solidify its position as top womens wear boutique.</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}



export default Clients
