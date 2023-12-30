import '../css/Animations.css';

const BarDown = ({ left, top, width, height, bar, delayTime, blue, anime }) => {
    const numberOfBars = bar;
    const delay = delayTime;

    return (
        <div
            style={{
                position: 'absolute',
                left: `${left}px`,
                top: `${top}px`,
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: 'white',
                overflow: 'hidden',
            }}
        >
            {Array.from({ length: numberOfBars }).map((_, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: '0',
                        width: '100%',
                        height: `${blue}%`,
                        backgroundColor: '#6CB9FF',
                        animation: `moveDown ${anime}ms linear ${index * delay}ms infinite`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default BarDown;
