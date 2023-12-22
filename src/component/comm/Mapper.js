import MainGround from '../../static/img/MainGround.png';
import Indicator from './Indicator';
import Indicator_Test from './Indicator_Test';

const Mapper = () => {
    const handleHotspotClick = (x) => {
        alert(`You clicked hotspot at ${x}`);
    };

    return (
        <div className='relative mt-10'>
            <div className='flex justify-center w-[1520px] h-[700px]'>
                <img src={MainGround} alt='MainGround' />
                <Indicator left={436} top={140} width={57} height={38} handleClick={() => handleHotspotClick('G')} />
                <Indicator left={927} top={91} width={57} height={38} handleClick={() => handleHotspotClick('A')} />
                <Indicator left={795} top={244} width={57} height={38} handleClick={() => handleHotspotClick('D')} />
                <Indicator left={951} top={235} width={57} height={38} handleClick={() => handleHotspotClick('C')} />
                <Indicator left={1008} top={235} width={57} height={38} handleClick={() => handleHotspotClick('B')} />
                <Indicator left={393} top={320} width={57} height={38} handleClick={() => handleHotspotClick('E')} />
                <Indicator left={450} top={320} width={57} height={38} handleClick={() => handleHotspotClick('F')} />
                <Indicator left={653} top={400} width={57} height={39} handleClick={() => handleHotspotClick('R')} />
                <Indicator left={725} top={400} width={57} height={38} handleClick={() => handleHotspotClick('Q')} />
                <Indicator left={1090} top={413} width={56} height={38} handleClick={() => handleHotspotClick('P')} />
                <Indicator left={373} top={474} width={57} height={38} handleClick={() => handleHotspotClick('O')} />
                <Indicator left={430} top={474} width={58} height={38} handleClick={() => handleHotspotClick('N')} />
                <Indicator left={488} top={474} width={57} height={38} handleClick={() => handleHotspotClick('M')} />
                <Indicator left={545} top={474} width={57} height={38} handleClick={() => handleHotspotClick('L')} />
                <Indicator left={602} top={474} width={57} height={38} handleClick={() => handleHotspotClick('K')} />
                <Indicator left={659} top={474} width={58} height={38} handleClick={() => handleHotspotClick('J')} />
                <Indicator left={717} top={474} width={57} height={38} handleClick={() => handleHotspotClick('I')} />
                <Indicator left={774} top={474} width={57} height={38} handleClick={() => handleHotspotClick('H')} />
                <Indicator left={831} top={474} width={57} height={38} handleClick={() => handleHotspotClick('S')} />
                <Indicator left={1032} top={503} width={57} height={38} handleClick={() => handleHotspotClick('T')} />
                <Indicator left={579} top={580} width={57} height={38} handleClick={() => handleHotspotClick('V')} />
                <Indicator left={498} top={626} width={56} height={38} handleClick={() => handleHotspotClick('W')} />
                <Indicator left={672} top={662} width={57} height={38} handleClick={() => handleHotspotClick('U')} />

                <Indicator left={515} top={86} width={58} height={45} handleClick={() => handleHotspotClick('F분기')} />
                <Indicator left={782} top={88} width={57} height={44} handleClick={() => handleHotspotClick('A분기')} />
                <Indicator left={731} top={159} width={57} height={45} handleClick={() => handleHotspotClick('D분기')} />
                <Indicator left={626} top={187} width={58} height={45} handleClick={() => handleHotspotClick('E분기')} />
                <Indicator left={978} top={151} width={57} height={45} handleClick={() => handleHotspotClick('B분기')} />
                <Indicator left={533} top={240} width={58} height={45} handleClick={() => handleHotspotClick('G분기')} />
                <Indicator left={681} top={240} width={58} height={45} handleClick={() => handleHotspotClick('I분기')} />
                <Indicator left={887} top={247} width={58} height={44} handleClick={() => handleHotspotClick('C분기')} />
                <Indicator left={555} top={317} width={57} height={44} handleClick={() => handleHotspotClick('H분기')} />
                <Indicator left={722} top={327} width={57} height={44} handleClick={() => handleHotspotClick('L분기')} />
                <Indicator left={806} top={289} width={57} height={44} handleClick={() => handleHotspotClick('J분기')} />
                <Indicator left={957} top={316} width={58} height={44} handleClick={() => handleHotspotClick('K분기')} />
                <Indicator left={495} top={534} width={58} height={45} handleClick={() => handleHotspotClick('O분기')} />
                <Indicator left={671} top={563} width={57} height={44} handleClick={() => handleHotspotClick('N분기')} />
                <Indicator left={886} top={532} width={58} height={44} handleClick={() => handleHotspotClick('M분기')} />
            </div>
        </div>
    );
};

export default Mapper;
