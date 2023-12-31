const Error = () => {

    return (
        <div className="flex justify-center w-full h-[837px] bg-gradient-to-br from-blue-50 to-blue-200">
            <div className="mt-[100px]">
                <div className="bg-blue-50 border-0 rounded-lg w-[300px] h-[300px] overflow-hidden shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#0b3565] w-full h-[85px]"><p className="text-3xl font-bold text-white text-center pt-[20px]">404 - Not Found</p></div>
                        <p className="text-[24px] font-[1000] text-center mt-[65px] mx-[20px]">The requested page was not found.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
