import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./component/Nav";
import Main from "./component/Main";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
