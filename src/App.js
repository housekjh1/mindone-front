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
        <Routes>
          <Route path="/" element={<div className="flex"><div className="hidden 2xl:flex w-1/5 justify-center"><SideBar /></div><div className="flex-1 justify-center items-center"><Main /></div></div>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
