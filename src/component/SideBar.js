import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sideBarState, sideBarToggle } from "./Atoms";

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [state, setState] = useRecoilState(sideBarState);
  const [toggle, setToggle] = useRecoilState(sideBarToggle);

  let currentTime = new Date();
  let y = currentTime.getFullYear();
  let m = currentTime.getMonth() + 1;
  let d = currentTime.getDate();
  let h = currentTime.getHours();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1537) {
        setSidebarOpen(false);
        setState(false);
        setToggle(false);
      } else {
        setSidebarOpen(true);
        setState(true);
      }
    };

    // 초기 로딩 시에도 설정 확인
    handleResize();

    // 창 크기 변경 이벤트에 대한 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 전달하여 이펙트가 마운트될 때 한 번만 실행되도록 함

  return (
    <div className={`bg-white border-black border-[1px] h-full ${(toggle || isSidebarOpen) ? 'w-[400px]' : 'hidden'}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="py-[20px] flex flex-col justify-center items-center bg-slate-200 border-b-black border-[1px] w-full">
          <div className="text-xl">{y}-{m}-{d}</div>
          <div className="text-xl">{h}:00</div>
        </div>
        <div className="pt-[20px] pb-[40px] flex flex-col items-center border-b-black border-[1px] w-full gap-[40px]">
          <div className="text-center text-lg">금일 09시까지의 정보</div>
          <div className="flex flex-col w-full gap-[15px] pl-10">
            <div>전체 송수유량</div>
            <div>전체 배수지 수요량</div>
            <div>전체 전력소비량</div>
          </div>
        </div>
        <div className="pt-[20px] pb-[40px] flex flex-col items-center border-b-black border-[1px] w-full gap-[40px]">
          <div className="text-center text-lg">금일 09시 이후 정보</div>
          <div className="flex flex-col w-full gap-[15px] pl-10">
            <div>전체 송수유량</div>
            <div>전체 배수지 수요량</div>
            <div>전체 전력소비량</div>
          </div>
        </div>
        <div className="pt-[20px] flex flex-col items-center w-full gap-[40px]">
          <div className="text-center text-lg">명일 전체 정보</div>
          <div className="flex flex-col w-full gap-[15px] pl-10">
            <div>전체 송수유량</div>
            <div>전체 배수지 수요량</div>
            <div>전체 전력소비량</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
