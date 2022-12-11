import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../redux/actions/userActions";
import { useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    username: null,
    password: null,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) {
      navigate("/cashier");
    } else if (userInfo && userInfo.isAdmin) {
      navigate("/admin")
    }

  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(login.username, login.password));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;

  const notify = () => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (userInfo) {
      toast.success("Login Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="h-screen m-[-50px]  flex justify-center items-center">
      <div className="px-10 py-12 rounded shadow-lg shadow-gray-300/100 flex flex-col gap-5 justify-content-center w-3/12">
        <h3 className="font-bold text-center text-lg">LOGIN</h3>

        <form className="flex flex-col gap-5" onSubmit={submitHandler}>
          <input
            id="username"
            type="text"
            placeholder="Enter Email"
            name="username"
            onChange={handleChange}
            className="tracking-widest py-3 border border-gray-300 normal-case text-center"
          />

          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
            name="password"
            className="tracking-widest py-3 border border-gray-300 normal-case text-center"
          />
          <button
            className="border border-gray-300 p-2 w-full btn"
            onClick={notify}
          >
            LOGIN
          </button>
          <ToastContainer />
        </form>

        <h3 className="normal-case text-center">
          Create Account?
          <Link to="/sign-up" className="normal-case text-blue-400">
            {" "}
            Sign Up
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;