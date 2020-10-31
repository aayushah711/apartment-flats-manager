import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/actions';
const NavBar = () => {
    const { isAuth } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
    };
    return (
        <div className="hello">
            {!isAuth ? (
                <React.Fragment>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Link to="/">Home</Link>
                    <a href="/" className="logout" onClick={handleLogout}>
                        Logout
                    </a>
                </React.Fragment>
            )}
        </div>
    );
};

export default NavBar;
