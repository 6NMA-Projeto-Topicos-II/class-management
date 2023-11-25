import { useNavigate } from "react-router-dom";
import Button from "../../Button/index.js"

export default function LogoutButton() {

    const navigate = useNavigate();

function logout() {
      sessionStorage.clear()
      navigate('/')
}
    return (
        <Button onClick={logout}>LOG OUT</Button>
    )
}