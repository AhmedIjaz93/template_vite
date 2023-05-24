import React, { Fragment, useEffect } from "react";
// import Navbar from "./components/Menu/nav";
import Navbar from "./components/menu/nav";
import AppRoutes from "./routes";
import { useSelector } from 'react-redux';
import "./App.css"

function App() {
  const currentUser = useSelector(state => state.user ? state.user.currentUser : null);
  const loggingStatus = useSelector(state => state.user ? state.user.loggedIn : false);

  return (
    <Fragment>
      <Navbar currentUser={currentUser} loggingStatus={loggingStatus} />
      <AppRoutes currentUser={currentUser} loggingStatus={loggingStatus} role={currentUser?.role} />
    </Fragment>
  );
}

export default App;

