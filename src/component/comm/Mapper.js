import { Box, Modal } from '@mui/material';
import MainGround from '../../static/img/MainGround.png';
import Indicator from './Indicator';
import Indicator_Test from './Indicator_Test';
import { useEffect, useRef, useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import BarR from './BarR';
import BarR2 from './BarR2';
import BarR3 from './BarR3';
import BarL from './BarL';
import BarL2 from './BarL2';
import BarL4 from './BarL4';
import BarDown from './BarDown';
import BarDown2 from './BarDown2';
import Graph from './Graph';

const Mapper = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalTag, setModalTag] = useState();
    const [graphTag, setGraphTag] = useState();
    const dt = useRef();
    const selHour = useRef();
    const selMinute = useRef();
    const [selectedX, setSelectedX] = useState('');

    const closeModal = () => {
        setOpenModal(false);
    }

    const hour = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
    const minute = ["00", "10", "20", "30", "40", "50"];

    const optHour = hour.map((item, idx) => {
        return (<option key={`hour${idx}`} value={item}>{item}</option>);
    });

    const optMinute = minute.map((item, idx) => {
        return (<option key={`minute${idx}`} value={item}>{item}</option>);
    });

    const fetchPredict = async (pool, predictTime) => {
        try {
            setGraphTag(<div>로딩 중...</div>);
            const url = `${process.env.REACT_APP_SERVER}predict?pool=${pool}&date=${predictTime}`;
            const resp = await fetch(url, {
                method: 'GET',
            });
            if (!resp.ok) {
                console.log("fetch error");
                setGraphTag(<div>데이터를 불러오는 데 실패했습니다.</div>);
            }
            const datas = await resp.json();
            setGraphTag(<Graph datas={datas} />);
        } catch (e) {
            setGraphTag(<div>fetch 오류</div>);
            console.log(e);
        }
    }

    const handlePredict = (e, x) => {
        e.preventDefault();
        if (dt.current.value.trim() === '') {
            alert("날짜를 입력해 주세요.");
            return;
        } else if (selHour.current.value.trim() === '') {
            alert("시간을 입력해 주세요.");
            return;
        } else if (selMinute.current.value.trim() === '') {
            alert("분을 입력해 주세요.");
            return;
        } else {
            let pool = x.slice(0, 1)
            let predictTime = `${dt.current.value}T${selHour.current.value}:${selMinute.current.value}`;
            fetchPredict(pool, predictTime);
            return;
        }
    }

    const handleHotspotClick = (x) => {
        setGraphTag();
        setSelectedX(x);
        setOpenModal(true);
    };

    useEffect(() => {
        setModalTag(
            <div>
                <div className='text-xl font-bold text-center'>{selectedX} 유출유량 예측 대시보드</div>
                <div className='border-[#0b3565] border-[2px] rounded mt-[30px] w-[1100px] h-[470px] flex flex-col justify-center items-center'>
                    <form>
                        <div className='flex flex-row gap-2.5'>
                            <input ref={dt} className='border-2' type='date' id='dt' name='dt' />
                            <select ref={selHour} className='border-2' id='selHour' name='selHour' >
                                <option value=''>-- 시간 선택 --</option>
                                {optHour}
                            </select>
                            <select ref={selMinute} className='border-2' id='selMinute' name='selMinute' >
                                <option value=''>-- 분 선택 --</option>
                                {optMinute}
                            </select>
                            <button className='bg-[#0b3565] rounded text-white font-[1000] py-[2px] px-[5px]' onClick={(e) => handlePredict(e, selectedX)}>조회</button>
                        </div>
                    </form>
                    <div className='w-[1000px] h-[400px] mt-[12px] flex justify-center items-center'>
                        {graphTag}
                    </div>
                </div>
            </div>
        );
    }, [selectedX, graphTag]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderColor: 'rgb(11, 53, 101)',
        borderWidth: '5px',
        borderStyle: 'solid',
        boxShadow: 24,
        p: 2,
    };

    return (
        <div>
            <div className='relative mt-10'>
                <div className='flex justify-center w-[1520px] h-[700px]'>
                    <img src={MainGround} alt='MainGround' />
                    <Indicator left={436} top={140} width={57} height={38} handleClick={() => handleHotspotClick('G배수지')} />
                    <Indicator left={927} top={91} width={57} height={38} handleClick={() => handleHotspotClick('A배수지')} />
                    <Indicator left={794} top={244} width={56} height={38} handleClick={() => handleHotspotClick('D배수지')} />
                    <Indicator left={951} top={235} width={57} height={38} handleClick={() => handleHotspotClick('C배수지')} />
                    <Indicator left={1008} top={235} width={57} height={38} handleClick={() => handleHotspotClick('B배수지')} />
                    <Indicator left={393} top={320} width={57} height={38} handleClick={() => handleHotspotClick('E배수지')} />
                    <Indicator left={450} top={320} width={57} height={38} handleClick={() => handleHotspotClick('F배수지')} />
                    <Indicator left={653} top={400} width={57} height={39} handleClick={() => handleHotspotClick('R배수지')} />
                    <Indicator left={725} top={400} width={57} height={38} handleClick={() => handleHotspotClick('Q배수지')} />
                    <Indicator left={1090} top={413} width={56} height={38} handleClick={() => handleHotspotClick('P배수지')} />
                    <Indicator left={373} top={474} width={57} height={38} handleClick={() => handleHotspotClick('O배수지')} />
                    <Indicator left={430} top={474} width={58} height={38} handleClick={() => handleHotspotClick('N배수지')} />
                    <Indicator left={488} top={474} width={57} height={38} handleClick={() => handleHotspotClick('M배수지')} />
                    <Indicator left={545} top={474} width={57} height={38} handleClick={() => handleHotspotClick('L배수지')} />
                    <Indicator left={602} top={474} width={57} height={38} handleClick={() => handleHotspotClick('K배수지')} />
                    <Indicator left={659} top={474} width={58} height={38} handleClick={() => handleHotspotClick('J배수지')} />
                    <Indicator left={717} top={474} width={57} height={38} handleClick={() => handleHotspotClick('I배수지')} />
                    <Indicator left={774} top={474} width={57} height={38} handleClick={() => handleHotspotClick('H배수지')} />
                    <Indicator left={831} top={474} width={57} height={38} handleClick={() => handleHotspotClick('S배수지')} />
                    <Indicator left={1032} top={503} width={57} height={38} handleClick={() => handleHotspotClick('T배수지')} />
                    <Indicator left={579} top={580} width={57} height={38} handleClick={() => handleHotspotClick('V배수지')} />
                    <Indicator left={498} top={626} width={56} height={38} handleClick={() => handleHotspotClick('W배수지')} />
                    <Indicator left={672} top={662} width={57} height={38} handleClick={() => handleHotspotClick('U배수지')} />

                    {/* <Indicator left={515} top={86} width={58} height={45} handleClick={() => handleHotspotClick('F분기')} />
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
                    <Indicator left={886} top={532} width={58} height={44} handleClick={() => handleHotspotClick('M분기')} /> */}

                    <BarDown left={466} top={110} width={3} height={30} bar={6} delayTime={600} blue={30} anime={3600} />
                    <BarL left={466} top={107} width={49} height={3} bar={6} delayTime={500} blue={20} anime={3000} />
                    <BarL left={573} top={107} width={67} height={3} bar={6} delayTime={500} blue={15} anime={3000} />
                    <BarDown left={653} top={77} width={3} height={18} bar={6} delayTime={600} blue={50} anime={3600} />
                    <BarR left={669} top={107} width={112} height={3} bar={6} delayTime={500} blue={10} anime={3000} />
                    <BarR left={840} top={107} width={57} height={3} bar={6} delayTime={500} blue={20} anime={3000} />
                    <BarDown left={653} top={123} width={3} height={64} bar={6} delayTime={600} blue={17.5} anime={3600} />
                    <BarR left={656} top={180} width={74} height={3} bar={6} delayTime={500} blue={15} anime={3000} />
                    <BarR2 left={789} top={180} width={188} height={3} bar={12} delayTime={500} blue={6.125} anime={6000} />
                    <BarDown left={653} top={232} width={3} height={108} bar={6} delayTime={600} blue={10} anime={3600} />
                    <BarDown left={915} top={183} width={3} height={63} bar={6} delayTime={600} blue={17.5} anime={3600} />
                    <BarDown left={1005} top={196} width={3} height={9} bar={6} delayTime={700} blue={75} anime={4200} />
                    <BarL left={975} top={205} width={31} height={3} bar={6} delayTime={600} blue={35} anime={3600} />
                    <BarR left={1006} top={205} width={32} height={3} bar={6} delayTime={600} blue={35} anime={3600} />
                    <BarL left={447} top={261} width={86} height={3} bar={6} delayTime={600} blue={12.5} anime={3600} />
                    <BarL left={591} top={261} width={62} height={3} bar={6} delayTime={600} blue={17.5} anime={3600} />
                    <BarR left={656} top={261} width={25} height={3} bar={6} delayTime={700} blue={40} anime={4200} />
                    <BarR left={739} top={261} width={25} height={3} bar={6} delayTime={700} blue={40} anime={4200} />
                    <BarDown left={447} top={264} width={3} height={25} bar={6} delayTime={600} blue={40} anime={3600} />
                    <BarL left={416} top={289} width={33} height={3} bar={6} delayTime={700} blue={30} anime={4200} />
                    <BarR left={449} top={289} width={34} height={3} bar={6} delayTime={700} blue={30} anime={4200} />
                    <BarL left={613} top={337} width={40} height={3} bar={6} delayTime={600} blue={27.5} anime={3600} />
                    <BarL2 left={678} top={310} width={127} height={3} bar={12} delayTime={500} blue={8.75} anime={6000} />
                    <BarL left={864} top={310} width={51} height={3} bar={6} delayTime={600} blue={22.5} anime={3600} />
                    <BarDown2 left={915} top={292} width={3} height={239} bar={12} delayTime={500} blue={5} anime={6000} />
                    <BarDown left={582} top={362} width={3} height={81} bar={6} delayTime={600} blue={15} anime={3600} />
                    <BarDown left={678} top={313} width={3} height={59} bar={6} delayTime={600} blue={18.75} anime={3600} />
                    <BarDown left={750} top={313} width={3} height={13} bar={6} delayTime={700} blue={62.5} anime={4200} />
                    <BarR left={918} top={336} width={39} height={3} bar={6} delayTime={600} blue={27.5} anime={3600} />
                    <BarR left={1015} top={334} width={103} height={3} bar={6} delayTime={550} blue={10.625} anime={3300} />
                    <BarDown2 left={1058} top={337} width={3} height={138} bar={12} delayTime={500} blue={8.75} anime={6000} />
                    <BarDown left={1115} top={337} width={3} height={48} bar={6} delayTime={600} blue={25} anime={3600} />
                    <BarL2 left={397} top={443} width={187} height={3} bar={12} delayTime={550} blue={6.25} anime={6600} />
                    <BarR3 left={584} top={443} width={278} height={3} bar={18} delayTime={550} blue={4.375} anime={9900} />
                    <BarL4 left={523} top={520} width={392} height={3} bar={24} delayTime={550} blue={3.125} anime={13200} />
                    <BarDown left={523} top={523} width={3} height={11} bar={6} delayTime={700} blue={75} anime={4200} />
                    <BarDown left={604} top={523} width={3} height={29} bar={6} delayTime={600} blue={30} anime={3600} />
                    <BarDown left={698} top={523} width={3} height={39} bar={6} delayTime={600} blue={22.5} anime={3600} />
                    <BarDown left={523} top={579} width={3} height={19} bar={6} delayTime={600} blue={40} anime={3600} />
                    <BarDown left={698} top={608} width={3} height={25} bar={6} delayTime={600} blue={35} anime={3600} />
                </div>
            </div>
            <Modal open={openModal}>
                <Box sx={style} className="rounded-lg w-auto">
                    <div>
                        <div className='w-[1200px] h-[600px]'>
                            <div className='flex justify-between'>
                                <div></div><button className='text-3xl text-[#0b3565] font-extrabold' onClick={closeModal}><FaWindowClose /></button>
                            </div>
                            <div className='flex justify-center items-center'>
                                {modalTag}
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default Mapper;
