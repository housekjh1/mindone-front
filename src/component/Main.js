import React from "react";
import Mapper from './comm/Mapper';

const Main = () => {
    return (
        <div className="flex justify-center items-center ">
            <div className='bg-gradient-to-br from-blue-50 to-blue-200 h-full w-[1520px]'>
                <Mapper />
            </div>
        </div>
    );
};

export default Main;
