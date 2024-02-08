import React, { useEffect, useState } from "react";
import "./Users.css"
import { Link } from "react-router-dom";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responseData) => responseData.json())
      .then((res) => setUsersData(res));
  }, []);
  console.log(usersData);
  return (
    <>
      <div className="container">
        <ul>
        {usersData.map((data,index) => (
          <li key={index}><Link to={`/users/${data.id}`}><h3>{data.name}</h3></Link></li>
        ))}
        </ul>
      </div>
    </>
  );
};

export default Users;
