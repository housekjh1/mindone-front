import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Nav from "./component/Nav";
import Main from "./component/Main";
import SideBar from "./component/SideBar";
import Login from "./component/Login";
import { useEffect } from "react";
import { isLoggedIn, userInfo } from "./component/Atoms";
import Error from "./component/Error";

function App() {
  const [login, setLogin] = useRecoilState(isLoggedIn);
  const [info, setInfo] = useRecoilState(userInfo);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}api/auth/check`, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.json())
      .then(data => {
        if (data.isLoggedIn) {
          setLogin(true);

          const userInfoObject = {};
          const keyValuePairs = data.userInfo.replace(/[{}]/g, '').split(', ');

          keyValuePairs.forEach(pair => {
            const [key, value] = pair.split('=');
            userInfoObject[key.trim()] = value.trim();
          });

          setInfo(userInfoObject);

        } else {
          setLogin(false);
        }
      })
      .catch(error => {
        console.error('Authentication check failed:', error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<div className="flex w-fit h-[837px]"><SideBar /><Main /></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
