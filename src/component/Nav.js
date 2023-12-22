import { useState } from 'react';
import logo_white from '../static/img/hd_logo.png';
import logo_blue from '../static/img/hd_logo_ov.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sideBarState, sideBarToggle } from './Atoms';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const state = useRecoilValue(sideBarState);
    const [toggle, setToggle] = useRecoilState(sideBarToggle);

    const hoverOver = () => {
        setIsHovered(true);
    }

    const hoverOut = () => {
        setIsHovered(false);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className='bg-[#0b3565] hover:bg-white transition duration-500 flex flex-row justify-between items-center py-5' onMouseOver={hoverOver} onMouseOut={hoverOut}>
            <div className='ml-5 flex flex-row gap-5'>
                {!state && (isHovered ? <button className='text-[#0b3565] text-2xl flex justify-center items-center' onClick={handleToggle}><GiHamburgerMenu /></button> : <button className='text-white text-2xl flex justify-center items-center' onClick={handleToggle}><GiHamburgerMenu /></button>)}
                <Link to="/">
                    {isHovered ?
                        <img src={logo_blue} alt="Logo_Blue" />
                        :
                        <img src={logo_white} alt="Logo_White" />
                    }
                </Link>
            </div>
            <Link to="/login"><div className={`${isHovered ? 'text-[#0b3565]' : 'text-white'} text-xl font-bold mr-10`}>로그인</div></Link>
        </div>
    );
}

export default Nav;
