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
        <div className="flex justify-center w-[1520px] bg-gradient-to-br from-blue-50 to-blue-200">
            <div className="mt-10">
                <div className="bg-gradient-to-br from-white from-5% via-green-50 via-30% to-indigo-100 to-95% border border-blue-100 rounded-lg w-[300px] h-[300px] overflow-hidden">
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
