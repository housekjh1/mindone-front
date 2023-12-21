
const MidDiv = ({caption, on}) => {
  return (
    <div className={`flex justify-center items-center w-30 h-15 p-5 ${on && 'bg-blue-100'}`}>
        {caption}
    </div>
  )
}

export default MidDiv
