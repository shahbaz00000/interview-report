import { useDispatch, useSelector } from "react-redux"
import { authThunk } from "../stores/slice/authslice"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    const navigate = useNavigate();
    const { user, token, isLoggedIn, isError } = useSelector((state) => state.auth);
    console.log("Auth state from useAuth hook:", { user, token, isLoggedIn, });
    const dispatch = useDispatch();

    const handleLogin = (data) => {
        try {
            dispatch(authThunk(data));
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return { user, token, isLoggedIn, isError, handleLogin };
};

export default useAuth