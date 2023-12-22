import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { sideBarState, sideBarToggle } from "./Atoms";

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [state, setState] = useRecoilState(sideBarState);
  const toggle = useRecoilValue(sideBarToggle);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1537) {
        setSidebarOpen(false);
        setState(false);
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
    <div className={`bg-red-50 h-full ${(toggle || isSidebarOpen) ? 'w-[400px]' : 'hidden'}`}>
    </div>
  );
};

export default SideBar;
