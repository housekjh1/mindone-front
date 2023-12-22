import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./component/Nav";
import Main from "./component/Main";
import SideBar from "./component/SideBar";
import Login from "./component/Login";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <div className="flex w-fit h-[837px]">
          <SideBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
