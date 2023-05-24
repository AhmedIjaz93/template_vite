import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { createNotification } from "../../helpers/createNotifications";
import { setCurrentUser } from "../../store/user/userSlice";
import LoginForm from "../../features/auth/login.form";
import "./login.css";
import { login } from "../../services/apis/authService";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignRole = (user) => {
    if (user.toLowerCase() == "admin") {
      return "admin"
    } else {
      return "user"
    }
  }

  const handleSubmit = async ({ username, password }) => {
      const loggedUser = await login({username, password});
      console.log('looged: ', loggedUser)
      if(loggedUser.username && loggedUser.password) {
        dispatch(setCurrentUser({ name: username, role: assignRole(loggedUser.username), token: "112324gg12444&&&&##" }));
        createNotification("success", "logged in");
        navigate(`/`);
      } else {
        createNotification("error", "invalid credentials");
      }
    
  };

  return (
    <Fragment>
      <div className="p-5 d-flex justify-content-center align-items-center">
        <div className="w-50">
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
