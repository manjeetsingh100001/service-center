import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStatus, userDetails } from '../Redux/actions';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const [FormData, setFormData] = useState({
        username: null,
        password: null
    });
    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    };

    // const [UserDetails, setUserDetails] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = () => {
        fetch("http://localhost:8080/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.map((e) => {
                    if (e.username === FormData.username && e.pass === FormData.password) {
                        console.log("success")
                        // setUserDetails(e);

                        // changing user status and adding user details in store
                        dispatch(userStatus(true));
                        dispatch(userDetails(e));
                        // if user has logged in, navigate them to respective pages based on role
                        if (e.role === "admin") {
                            navigate("/orders");
                        } else {
                            navigate("/neworder");
                        }
                    }
                    return e;
                });
            });
    }
    return (
        <div>
            <input
                onChange={handleChange}
                className="username"
                type="text"
                name="username"
                placeholder="Enter Username"
            />
            <input
                onChange={handleChange}
                className="password"
                type="password"
                name="password"
                placeholder="Enter password"
            />
            {/* On this button click make network req to find user with same username and password */}
            {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
            <button
                onClick={handleLogin}
                className="submit">Login</button>
        </div>
    );
};