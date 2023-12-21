
const Login = () => {
    async function fetch() {
        try {
            const resp = await fetch("http://10.125.121.217:8080/auth/naver");
            if (!resp.ok) {
                console.log("Fetch Error");
            }
            const datas = await resp.json();
            console.log(datas);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex flex-row gap-10">
            <a href="http://10.125.121.217:8080/auth/naver">네이버 OAuth2</a>
            <button onClick={fetch}>fetch</button>
        </div>
    )
}

export default Login
