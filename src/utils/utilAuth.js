import { useSelector } from "react-redux"

export function IsLogin(){
  const isLogin =  useSelector(state => state.user.loggedIn ? state.user.loggedIn : false );    
  return isLogin; 
}

export function GetCurrentUser(){
    const currentUser =  useSelector(state => state.user.currentUser ? state.user.currentUser : null );    
    return currentUser; 
}
  