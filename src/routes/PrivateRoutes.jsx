import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth"
import Loading from "../pages/Loading";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }

  return <Navigate to='/' state={{ from: location }} replace />
 
}
 PrivateRoutes.propTypes = {
   children: PropTypes.node,
 };
export default PrivateRoutes