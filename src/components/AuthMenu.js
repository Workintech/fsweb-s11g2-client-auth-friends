import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthMenu() {
    let location = useLocation(); // route değişti mi kontrolü
    useEffect(() => { }, [location]);


    const history = useHistory();
    let loggedInToken = localStorage.getItem("s11g2etut");
    const triggerLogout = (e) => {
        console.log("logout butonuna basıldı");
        localStorage.removeItem("s11g2etut"); // token siliyoruz ki giriş yapamasın
        history.push("/");
    };
    return (
        <span>
            {loggedInToken === null ? (
                <Link to="/login">Login</Link>
            ) : (
                <button onClick={triggerLogout}>Logout</button>
            )}
        </span>
    );
}
