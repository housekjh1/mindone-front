import CircleDiv from "./CircleDiv"

const Junction = ({ caption, on, p, f }) => {
    return (
        <div className={`flex flex-col justify-center items-center w-30 h-15 p-5`}>
            <div className="text-center bg-green-100 w-full">
                {caption}
            </div>
            <div className={`flex flex-row ${on && 'bg-blue-100'}`}>
                {p && <CircleDiv caption='P' blue={true} />}
                {f && <CircleDiv caption='F' slate={true} />}
            </div>
        </div>
    )
}

export default Junction
