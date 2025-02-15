export default function Homepage() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
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
                    <h1 className="text-[150px] text-primaryTextColor text-center uppercase font-bold font-inter tracking-wide">ARCTIC</h1>
                    {/* <p className="text-4xl px-2 text-white">Software Developer</p> */}
                </div>
            </div>

            

        </>
    )
}