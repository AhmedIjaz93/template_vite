import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import UserList from "../features/user/user.list";
import ChangePassword from "../features/auth/change.password";
import CreateUser from "../features/user/create.users";
import Home from "../pages/homepage/homepage";
import Dashboard from "../pages/dashboard/dashboard";
import NotFound from "../pages/notfound/notFound";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";
import ProtectedRoute from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="*" exact strict element={<NotFound />} />

        <Route
          path="/"
          exact
          strict
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          exact
          strict
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/user/pass"
          exact
          strict
          element={
            <PrivateRoute>
              <ChangePassword />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/create"
          exact
          strict
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/list"
          exact
          strict
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
