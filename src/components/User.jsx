import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const User = ({ user }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    const id = user?._id;
    const role = "admin";

    const url = `https://microbyte.herokuapp.com/user/admin/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("role updated succsessfully");
      });
  };
  return (
    <tr>
      <td>{user.email}</td>
      <td>Blue</td>
      {role == "admin" ? (
        ""
      ) : (
        <button onClick={makeAdmin} class="btn btn-xs">
          Make Admin
        </button>
      )}
    </tr>
  );
};

export default User;
