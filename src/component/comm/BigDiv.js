const BigDiv = ({ caption, on }) => {
    return (
        <div className={`flex justify-center items-center w-40 h-15 p-10 ${on && 'bg-blue-100'}`}>
            {caption}
        </div>
    )
}

export default BigDiv
