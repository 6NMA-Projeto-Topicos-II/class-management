import { useState } from "react";

export default function Auth() {
    const token = sessionStorage.getItem("token");
    
    const [UserLogado, setUserLogado] = useState(false);

    if (token === false) {
        setUserLogado(false)
        console.log(UserLogado);
    }
    
    return UserLogado;
}