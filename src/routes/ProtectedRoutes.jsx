import { Route, Routes, Navigate} from "react-router-dom";
import { IsLogin, GetCurrentUser } from "../utils/utilAuth";

export default function ProtectedRoute({ children }) {
  const isLogin = IsLogin();
  const currentUser = GetCurrentUser();
  
  console.log(" Login Status and Current User is---> ",isLogin, currentUser);

  if((!isLogin ||  !currentUser ||  currentUser.role !== 'admin')){
    return <Navigate to="/login" replace />
  }else{
    return children
  }
}
