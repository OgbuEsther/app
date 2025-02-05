import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]); //creating a storage component

  //fetching the data
  useEffect(() => {
    axios
      .get("https://my-todos-app-z06s.onrender.com/user/get-all")
      .then((response) => setUsers(response.data.data)) //storage of retrieved data
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} , <span>{user.email}</span>
        </li>
      ))}
    </ul>
  );
};

export default GetAllUsers;
