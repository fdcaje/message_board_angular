class Connect {}

class Auth {
    static login(uname, pword) {
        if (!uname || !pword) return false;

        fetch("http://127.0.0.1:90/login", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "*",
            },
            body: JSON.stringify({
                username: uname,
                password: pword,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    }

    static getAuth() {
        return 123;
    }
}

export default Auth;
