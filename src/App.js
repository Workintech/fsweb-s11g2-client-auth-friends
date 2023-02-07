import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm';
import FriendList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import AuthMenu from "./components/AuthMenu";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">

      <nav className="flex gap-2 justify-center text-lg text-blue-600">
        <Link to="/friends-list" className="p-2 underline" >
          Friends List
        </Link>
        <Link to="/add-friend">Add Friend</Link>
        <AuthMenu />
      </nav>
      <h1>Client Auth Projesi: Friends</h1>


      <div className="max-w-sm mx-auto">
        <Switch>
          <Route exact path="/">
            <h2 className="text-xl font-bold p-2">Kayıt Ol</h2>
            <LoginForm />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
