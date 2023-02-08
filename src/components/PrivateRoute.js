import { Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("private'e erişmeye çalışıyor");

  const token = localStorage.getItem("token");
  //   if (token === null) {
  //     const notify = () => toast("Wow so easy!");
  //   }
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
