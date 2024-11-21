import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import Loading from "../pages/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const userData = useUserData();

  if (loading || !userData.role) {
    return <Loading></Loading>;
  }
  if (user && userData.role === "buyer") {
    return children;
  }

  return <Navigate to='/login' state={{ from: location }} replace />;
};
BuyerRoute.propTypes = {
  children: PropTypes.node,
};
export default BuyerRoute;
