import gsap from "gsap"
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {

    const gridFadeRef = useRef()
    const gridFadeRefTwo = useRef()

    console.log(gridFadeRef)

    console.log(gridFadeRefTwo)

    const fadeAnimation = (elementRef) => {
        if (!elementRef.current) return;
        gsap.to(elementRef.current, {
            scrollTrigger: {
                trigger: elementRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                markers: true,
                onEnter: () => gsap.to(elementRef.current, { opacity: 1 }),
                onLeave: () => gsap.to(elementRef.current, { opacity: 0 }),
                onEnterBack: () => gsap.to(elementRef.current, {opacity: 1 }),
                onLeaveBack: () => gsap.to(elementRef.current, {opacity: 0 }),
            }
        })
    }

    useEffect(() => {
        if (gridFadeRef.current && gridFadeRefTwo.current) {
            fadeAnimation(gridFadeRef); // Apply to the first element
            fadeAnimation(gridFadeRefTwo); // Apply to the second element
          }
    }, [])

    return (
        <>
            <div className="fixed w-full h-screen overflow-hidden">
                {/* Backgroud video */}
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="../../images/test-video-2.mp4" type="video/mp4" />
                    Your browser does not support this video tag
                </video>

                {/* Overlay  */}
                <div className="absolute inset-0 bg-black/50">
                </div>

                {/* Content  */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    <h1 className="text-[150px] text-primaryTextColor text-center uppercase font-bold font-inter tracking-wide">North East Native</h1>
                    {/* <p className="text-4xl px-2 text-white">Software Developer</p> */}
                </div>

                <div  className="absolute grid grid-cols-5 h-full w-full">
                    <span ref={gridFadeRef} className="bg-black opacity-10"></span>
                    <span ref={gridFadeRefTwo} className="bg-black opacity-10"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <section className="h-[2000px]"></section>
        </>
    )
}