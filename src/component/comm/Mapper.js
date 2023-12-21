import MainGround from '../../static/img/MainGround.png';
import Indicator from './Indicator';
import Indicator_Test from './Indicator_Test';

const Mapper = () => {
    const handleHotspotClick = (x) => {
        alert(`You clicked hotspot at ${x}`);
    };

    return (
        <div className='relative mt-5'>
            <div className='flex justify-center w-[1400px] h-[700px]'>
                <img src={MainGround} alt='MainGround' />
                <Indicator left={376} top={140} width={57} height={38} handleClick={() => handleHotspotClick('G')} />
                <Indicator left={867} top={91} width={57} height={38} handleClick={() => handleHotspotClick('A')} />
                <Indicator left={735} top={244} width={57} height={38} handleClick={() => handleHotspotClick('D')} />
                <Indicator left={891} top={235} width={57} height={38} handleClick={() => handleHotspotClick('C')} />
                <Indicator left={948} top={235} width={57} height={38} handleClick={() => handleHotspotClick('B')} />
                <Indicator left={333} top={320} width={57} height={38} handleClick={() => handleHotspotClick('E')} />
                <Indicator left={390} top={320} width={57} height={38} handleClick={() => handleHotspotClick('F')} />
                <Indicator left={593} top={400} width={57} height={38} handleClick={() => handleHotspotClick('R')} />
                <Indicator left={665} top={400} width={57} height={38} handleClick={() => handleHotspotClick('Q')} />
                <Indicator left={1030} top={413} width={57} height={38} handleClick={() => handleHotspotClick('P')} />
                <Indicator left={313} top={474} width={57} height={38} handleClick={() => handleHotspotClick('O')} />
                <Indicator left={370} top={474} width={58} height={38} handleClick={() => handleHotspotClick('N')} />
                <Indicator left={428} top={474} width={57} height={38} handleClick={() => handleHotspotClick('M')} />
                <Indicator left={485} top={474} width={57} height={38} handleClick={() => handleHotspotClick('L')} />
                <Indicator left={542} top={474} width={57} height={38} handleClick={() => handleHotspotClick('K')} />
                <Indicator left={599} top={474} width={57} height={38} handleClick={() => handleHotspotClick('J')} />
                <Indicator left={656} top={474} width={58} height={38} handleClick={() => handleHotspotClick('I')} />
                <Indicator left={714} top={474} width={57} height={38} handleClick={() => handleHotspotClick('H')} />
                <Indicator left={771} top={474} width={57} height={38} handleClick={() => handleHotspotClick('S')} />
                <Indicator left={972} top={503} width={57} height={38} handleClick={() => handleHotspotClick('T')} />
                <Indicator left={519} top={580} width={57} height={38} handleClick={() => handleHotspotClick('V')} />
                <Indicator left={438} top={626} width={57} height={38} handleClick={() => handleHotspotClick('W')} />
                <Indicator left={612} top={662} width={57} height={38} handleClick={() => handleHotspotClick('U')} />

                <Indicator left={455} top={86} width={58} height={45} handleClick={() => handleHotspotClick('F분기')} />
                <Indicator left={722} top={88} width={57} height={44} handleClick={() => handleHotspotClick('A분기')} />
                <Indicator left={671} top={159} width={57} height={45} handleClick={() => handleHotspotClick('D분기')} />
                <Indicator left={566} top={187} width={58} height={45} handleClick={() => handleHotspotClick('E분기')} />
                <Indicator left={918} top={151} width={57} height={45} handleClick={() => handleHotspotClick('B분기')} />
                <Indicator left={473} top={240} width={58} height={45} handleClick={() => handleHotspotClick('G분기')} />
                <Indicator left={621} top={240} width={58} height={45} handleClick={() => handleHotspotClick('I분기')} />
                <Indicator left={827} top={246} width={58} height={45} handleClick={() => handleHotspotClick('C분기')} />
                <Indicator left={495} top={317} width={57} height={44} handleClick={() => handleHotspotClick('H분기')} />
                <Indicator left={662} top={326} width={57} height={45} handleClick={() => handleHotspotClick('L분기')} />
                <Indicator left={746} top={289} width={57} height={44} handleClick={() => handleHotspotClick('J분기')} />
                <Indicator left={897} top={316} width={58} height={44} handleClick={() => handleHotspotClick('K분기')} />
                <Indicator left={435} top={534} width={58} height={45} handleClick={() => handleHotspotClick('O분기')} />
                <Indicator left={611} top={563} width={57} height={44} handleClick={() => handleHotspotClick('N분기')} />
                <Indicator_Test left={826} top={532} width={58} height={44} handleClick={() => handleHotspotClick(1)} />
                <Indicator_Test left={553} top={90} width={57} height={38} handleClick={() => handleHotspotClick(1)} />
            </div>
        </div>
    );
};

export default Mapper;
