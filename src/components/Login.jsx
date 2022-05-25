import axios from "axios";
import React, { useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithEmailAndPassword, user2, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading2, errorHook] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    signInWithEmailAndPassword(email, pass);
  };
  const email = user?.email;
  useEffect(() => {
    if (user) {
      const userData = async () => {
        const { data } = await axios.post("http://localhost:5000/login", {
          email,
        });
        localStorage.setItem("accesToken", data);
        // <===== store user to database ====>
        const res = await axios.put(`http://localhost:5000/user/${email}`, {
          email: email,
        });
        navigate(from);
      };
      userData();
    }
  }, [user]);

  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
          <p class="py-6">
            Login to change your lifestyle and build your buisness with us.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <form action="" onSubmit={handleLogin}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  class="input input-bordered"
                  name="email"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered"
                  name="pass"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div class="divider">OR</div>
            <Link to="/singup">Singup</Link>
            <button onClick={() => signInWithGoogle()} className="btn">
              Contunu With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
