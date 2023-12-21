
const CircleDiv = ({caption, on, blue, slate}) => {
  return (
    <div className={`flex justify-center items-center w-[3rem] h-[3rem] ${on && 'bg-slate-200'} ${blue && 'bg-blue-200'} ${slate && 'bg-slate-300'} rounded-full`}>
        {caption}
    </div>
  )
}

export default CircleDiv
