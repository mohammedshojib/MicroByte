import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`https://microbyte.herokuapp.com/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <div class="overflow-x-auto">
      <h2 className="text-center text-2xl mt-5 mb-5">All Users</h2>
      <table class="table w-full">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Address</th>
            <th>Address</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
