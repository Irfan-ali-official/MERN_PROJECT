import { Navigate, Outlet, Route } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("User");
  console.log(token);
  return token && token.length != 0;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return <>{isAuth ? <Outlet /> : <Navigate to="/signin" />}</>;
};
export default ProtectedRoute;
