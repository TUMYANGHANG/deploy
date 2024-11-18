import {Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = () =>{
  const navigate = useNavigation();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user.key) {
    return <Navigate to = "/login"/>;
  }
  return<Outlet/>;
};

export default ProtectedRoute;