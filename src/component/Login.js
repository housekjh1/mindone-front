import { Link } from "react-router-dom";
import Naver from '../static/img/Naver.png';

const Login = () => {
    // const fetchData = async () => {
    //     try {
    //         const url = "http://10.125.121.217:8080/auth/naver";
    //         const authToken = "1"; // Replace with your actual authorization token
    //         const formData = new FormData();

    //         // Append data to FormData
    //         formData.append("key1", "value1");
    //         formData.append("key2", "value2");

    //         const resp = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Authorization': authToken,
    //             },
    //             body: formData,
    //         });

    //         if (!resp.ok) {
    //             console.log("Fetch Error");
    //             throw new Error("Network response was not ok");
    //         }

    //         const datas = await resp.json();
    //         console.log(datas);
    //     } catch (error) {
    //         console.error("Error during fetch:", error);
    //     }
    // };

    return (
        <div className="flex justify-center w-full h-[837px] bg-gradient-to-br from-blue-50 to-blue-200">
            <div className="mt-[100px]">
                <div className="bg-blue-50 border-0 rounded-lg w-[300px] h-[300px] overflow-hidden shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#0b3565] w-full h-[85px]"><p className="text-3xl font-bold text-white text-center pt-[20px]">Login</p></div>
                        {/* <Link to="http://10.125.121.217:8080/auth/naver"> */}
                        <Link to="http://localhost:8080/oauth2/naver">
                            <div className="mt-[80px] flex justify-center items-center gap-1">
                                <img className="w-[50px] h-[50px] rounded" src={Naver} />
                                <p className="flex justify-center items-center bg-gradient-to-b from-[#03E965] to-[#03B964] rounded w-[190px] h-[50px] text-white text-lg font-bold">네이버로 로그인하기</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
