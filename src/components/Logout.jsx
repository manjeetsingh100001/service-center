import { userStatus, changeOrder, userDetails } from '../Redux/actions'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Logout = () => {
    const dispatch = useDispatch();
    dispatch(userStatus(false));
    dispatch(userDetails(null));
    dispatch(changeOrder([]));
    // Logout component, just log user out and take him to `/` homepage

    // suggestion: if you are storing anyting in redux it's a good idea to
    // empty it before loggin out. eg: order

    return <Navigate to={"/"}></Navigate>
};