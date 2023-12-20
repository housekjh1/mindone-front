import { useState } from 'react';
import logo_white from '../static/img/hd_logo.png';
import logo_blue from '../static/img/hd_logo_ov.png';

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverOver = () => {
        setIsHovered(true);
    }

    const hoverOut = () => {
        setIsHovered(false);
    }

    return (
        <div className='bg-[#0b3565] hover:bg-white transition duration-500 flex flex-row justify-between items-center py-5' onMouseOver={hoverOver} onMouseOut={hoverOut}>
            <div className='pl-5'>
                {isHovered ?
                    <img src={logo_blue} alt="Logo_Blue" />
                    :
                    <img src={logo_white} alt="Logo_White" />
                }
            </div>
            <div className={`${isHovered ? 'text-[#0b3565]' : 'text-white'} text-xl font-bold pr-10`}>로그아웃</div>
        </div>
    );
}

export default Nav;
