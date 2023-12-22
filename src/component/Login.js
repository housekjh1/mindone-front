import { Link } from "react-router-dom"

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
                        {/* <Link to="http://10.125.121.217:8080/auth/naver"><div className="mt-10 mb-10">네이버 OAuth2</div></Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
