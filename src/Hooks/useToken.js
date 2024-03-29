import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.user?.dispalyName;
        const currentUser = { email: email, name: name };
        if (email) {
            fetch(`https://x-parts.onrender.com/user/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(currentUser),
            })
                .then((res) => res.json())
                .then((data) => {
                    const accessToken = data.token;
                    localStorage.setItem("accessToken", data.token);
                    setToken(accessToken);
                });
        }
    }, [user]);
    return [token];
};

export default useToken;
