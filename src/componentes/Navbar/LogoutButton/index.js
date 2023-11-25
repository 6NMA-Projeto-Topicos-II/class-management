import { useNavigate } from "react-router-dom";
import Button from "../../Button/index.js"
import "./style.css"

export default function LogoutButton() {

    const navigate = useNavigate();

function logout() {
      sessionStorage.clear()
      navigate('/')
}
    return (
        <Button className="logout"  onClick={logout}>LOG OUT</Button>
    )
}