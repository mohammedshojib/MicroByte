import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [user, loading, errorHook] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <>
      <div class="drawer min-h-screen">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div class="w-full navbar mt-16">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-2" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">DashBoard</div>
            <div class="flex-none hidden lg:block">
              <ul class="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}

                {!admin && (
                  <>
                    <li>
                      <Link to="/dashboard">MyOrder</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/review">Review</Link>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                {admin && (
                  <>
                    <li>
                      <Link to="/dashboard/users">Users</Link>
                    </li>

                    <li>
                      <Link to="/dashboard/add-product">Add Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/products">Manage Product</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/orders">Manage Orders</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <div className="text-center">
            <h2 className="text-4xl">Dashboard</h2>
            <Outlet />
          </div>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">MyOrder</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Review</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/users">Users</Link>
                </li>

                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/products">Manage Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/orders">Manage Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
