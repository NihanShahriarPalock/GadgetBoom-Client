import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";
import useUserData from "../hooks/useUserData";

const SellerRoute = ({children}) => {
   const { user, loading } = useAuth();
   const location = useLocation();
   const userData = useUserData();

   if (loading || !userData.role) {
     return <Loading></Loading>;
   }
   if (user && userData.role === "seller") {
     return children;
   }

  return <Navigate to='/login' state={{ from: location }} replace />;
};
SellerRoute.propTypes = {
  children: PropTypes.node,
};
export default SellerRoute;
