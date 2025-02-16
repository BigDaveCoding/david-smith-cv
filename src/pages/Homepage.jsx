import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavBar from "../components/NavBar";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {

    const gridFadeRef = useRef()
    const gridFadeRefTwo = useRef()
    const gridFadeRefThree = useRef()
    const gridFadeRefFour = useRef()
    const gridFadeRefFive = useRef()
    const gridFadeRefSix = useRef()

    const fadeAnimation = (elementRef) => {

        if (!elementRef.current) return;

        gsap.to(elementRef.current, {
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top",
                // end: "bottom top",
                scrub: true,
                // markers: true,
                onEnter: () => gsap.to(elementRef.current, { x: 0,  }),
                // onLeave: () => gsap.to(elementRef.current, { x: -500 }),
                onEnterBack: () => gsap.to(elementRef.current, {x: 0,  }),
                onLeaveBack: () => gsap.to(elementRef.current, {x: -500,  }),
            }
        })
    }

    useEffect(() => {
        if (gridFadeRef.current && gridFadeRefTwo.current && gridFadeRefThree.current && gridFadeRefFour.current && gridFadeRefFive.current && gridFadeRefSix.current) {
            fadeAnimation(gridFadeRef); 
            fadeAnimation(gridFadeRefTwo); 
            fadeAnimation(gridFadeRefThree);
            fadeAnimation(gridFadeRefFour);
            fadeAnimation(gridFadeRefFive);
            fadeAnimation(gridFadeRefSix);
          }
    }, [])

    return (
        <>
            <div className="fixed w-full h-screen overflow-hidden">

            <div className="absolute z-50 w-full">
                <NavBar />
            </div>

                {/* Backgroud video */}
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="../../images/test-video-three.mp4" type="video/mp4" />
                    Your browser does not support this video tag
                </video>

                {/* Overlay  */}
                <div className="absolute inset-0 bg-black/50">
                </div>

                {/* Content  */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    <h1 className="text-8xl text-primaryTextColor text-center uppercase font-bold font-inter tracking-wide">North East Native</h1>
                    {/* <p className="text-4xl px-2 text-white">Software Developer</p> */}
                </div>

                {/* fading in grid  */}
                <div  className="absolute grid grid-cols-6 h-full w-full">
                    <div className="overflow-hidden border-r-1 border-borderColor">
                        <div ref={gridFadeRef} className="bg-black w-full h-full -translate-x-[500px] "></div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={gridFadeRefTwo} className="bg-black w-full h-full -translate-x-[500px]"></div>
                    </div>
                    <div className="overflow-hidden border-r-1 border-borderColor">
                        <div ref={gridFadeRefThree} className="bg-black w-full h-full -translate-x-[500px]"></div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={gridFadeRefFour} className="bg-black w-full h-full -translate-x-[500px]"></div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={gridFadeRefFive} className="bg-black w-full h-full -translate-x-[500px]"></div>
                    </div>
                    <div className="overflow-hidden border-l-1 border-borderColor">
                        <div ref={gridFadeRefSix} className="bg-black w-full h-full -translate-x-[500px]"></div>
                    </div>
                </div>
                
            </div>

            <section className="h-[2000px]"></section>
        </>
    )
}