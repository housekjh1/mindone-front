import '../css/Animations.css';

const BarR = ({ left, top, width, height, bar, delayTime, blue, anime }) => {
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
                        left: '0',
                        width: `${blue}%`,
                        height: '100%',
                        backgroundColor: '#6CB9FF',
                        animation: `moveR ${anime}ms linear ${index * delay}ms infinite`,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default BarR;
