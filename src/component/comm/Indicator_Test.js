
const Indicator_Test = ({ left, top, width, height, handleClick }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: `${left}px`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: 'rgba(0, 0, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onClick={handleClick}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 255, 0.8)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'}
        />
    )
}

export default Indicator_Test
