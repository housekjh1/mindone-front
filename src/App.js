import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./component/Nav";
import Main from "./component/Main";
import SideBar from "./component/SideBar";

function App() {
  return (
    <RecoilRoot>
      <div className="h-screen overflow-hidden">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<div className="flex flex-row"><div className="basis-2/12"><SideBar /></div><div className="basis-10/12"><Main /></div></div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
