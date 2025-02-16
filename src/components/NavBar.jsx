export default function NavBar() {
    return (
        <>
            <nav className="grid grid-cols-[1fr_2fr_2fr_1fr] text-primaryTextColor uppercase tracking-wide justify-center items-center">
                <div className="border-y-1 border-borderColor">
                    <p className=" p-2 uppercase" >North East Native</p>
                </div>
                <p className="p-2 text-sm">The Project</p>
                <p className="p-2 text-sm">Impact in Action</p>
                <p className="p-2 text-sm">Join the Journey</p>
            </nav>
        </>
    )
}