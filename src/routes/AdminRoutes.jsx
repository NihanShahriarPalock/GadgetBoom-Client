import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import Loading from "../pages/Loading";

const AdminRoutes = ({children}) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   const userData = useUserData();

   if (loading || !userData.role) {
     return <Loading></Loading>;
   }
   if (user && userData.role === "admin") {
     return children;
   }

   return <Navigate to='/login' state={{ from: location }} replace />;
};
AdminRoutes.propTypes = {
  children: PropTypes.node,
};
export default AdminRoutes;
