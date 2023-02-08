import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthMenu() {
  let location = useLocation(); // route değişti mi kontrolü
  useEffect(() => {}, [location]);
  // location değiştikçe uygulamayı renderlıyoruz
  // böylece Auth bileşeni yeniden render oluyor

  const history = useHistory();
  let loggedInToken = localStorage.getItem("token");
  const triggerLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token"); // token siliyoruz ki giriş yapamasın
    history.push("/login");
  };
  return (
    <span>
      {loggedInToken === null ? (
        ""
      ) : (
        <button
          onClick={triggerLogout}
          className="border border-black p-3 bg-black text-white"
        >
          Logout
        </button>
      )}
    </span>
  );
}
