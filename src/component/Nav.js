import { useState } from 'react';
import logo_white from '../static/img/hd_logo.png';
import logo_blue from '../static/img/hd_logo_ov.png';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isLoggedIn, sideBarState, sideBarToggle, userInfo } from './Atoms';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { Box, Modal } from '@mui/material';
import { FaWindowClose } from "react-icons/fa";

const Nav = () => {
    const [isHovered, setIsHovered] = useState(false);
    const state = useRecoilValue(sideBarState);
    const [toggle, setToggle] = useRecoilState(sideBarToggle);
    const [login, setLogin] = useRecoilState(isLoggedIn);
    const [info, setInfo] = useRecoilState(userInfo);
    const [sticker, setSticker] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [modalTag, setModalTag] = useState();

    const hoverOver = () => {
        setIsHovered(true);
    }

    const hoverOut = () => {
        setIsHovered(false);
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleClick = () => {
        setSticker(!sticker);
    }

    const handleLogout = () => {
        fetch(`${process.env.REACT_APP_SERVER}api/auth/logout`, {
            method: 'GET',
            credentials: 'include' // 쿠키 포함
        })
            .then(() => {
                setLogin(false);
                setInfo();
                setSticker(false);
            })
            .catch(error => {
                console.error('Logout failed:', error);
            });
    }

    const handleLogPage = () => {
        setOpenModal(true);
        fetchGetLog();
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const fetchGetLog = async () => {
        try {
            const url = `${process.env.REACT_APP_SERVER}log`;
            const resp = await fetch(url, {
                method: 'GET',
            });
            if (!resp.ok) {
                console.log("Failed to get log.");
                return;
            }
            const datas = await resp.json();
            console.log(datas);
        } catch (e) {
            console.log("fetchGetLog error.");
            return;
        }
    }

    const stickerStyle = {
        position: 'absolute',
        top: '75px',
        right: '30px',
        backgroundColor: '#FFFFFF',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        zIndex: 1000
    };

    const tailStyle = {
        position: 'absolute',
        top: '-30px',
        right: '20px',
        borderWidth: '15px',
        borderStyle: 'solid',
        borderColor: 'transparent transparent #FFFFFF transparent',
        zIndex: 1000
    };

    const modalStyle = {
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
    }

    return (
        <div>
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
                {login ?
                    <button className={`${isHovered ? 'text-[#0b3565]' : 'text-white'} text-xl font-bold mr-10`} onClick={handleClick}>{info.name}</button> :
                    <Link to="/login"><div className={`${isHovered ? 'text-[#0b3565]' : 'text-white'} text-xl font-bold mr-10`}>로그인</div></Link>}
            </div>
            {sticker && (info && (info.email === "housekjh@naver.com") ?
                <div style={stickerStyle}>
                    <div style={tailStyle}></div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <button className='text-[18px] text-[#0b3565] font-[1000] text-center' onClick={handleLogPage}>업무기록</button>
                        <button className='text-[18px] text-[#0b3565] font-[1000] text-center' onClick={handleLogout}>로그아웃</button>
                    </div>
                </div> :
                <div style={stickerStyle}>
                    <div style={tailStyle}></div>
                    <button className='text-[18px] text-[#0b3565] font-[1000] text-center' onClick={handleLogout}>로그아웃</button>
                </div>
            )}
            <Modal open={openModal}>
                <Box sx={modalStyle} className="rounded-lg w-auto">
                    <div>
                        <div className='w-[1200px] h-[600px]'>
                            <div className='flex justify-center items-center'>
                                <div className='w-[1200px] flex flex-col justify-center items-center relative'>
                                    <div className='flex justify-between items-center mt-[10px]'>
                                        <div></div><div className='text-xl text-center font-[1000]'>업무기록 대시보드</div><button className='text-3xl text-[#0b3565] font-extrabold absolute left-[1170px] top-[-5px]' onClick={closeModal}><FaWindowClose /></button>
                                    </div>
                                    {modalTag}
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Nav;
