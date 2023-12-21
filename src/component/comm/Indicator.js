
const Indicator = ({ left, top, width, height, handleClick }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: `${left}px`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
            }}
            onClick={handleClick}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(0, 0, 0, 0)'}
        />
    )
}

export default Indicator
