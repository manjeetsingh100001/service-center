// /orders and /neworder are protected routes
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const status = useSelector(store => store.isLoggedIn);
    if (!status) {
        return <Navigate to={"/login"}></Navigate>
    }
    return children;
};