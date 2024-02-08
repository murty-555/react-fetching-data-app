import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UsersDetail = () => {
  const [userDetailData, setUserDetailData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUserDetailData(json);
      });
    // console.log(userDetailData)
  }, [id]);
  // console.log(id)
  return (
    <div>
      <h2>User Details</h2>
      <h3>{userDetailData.name}</h3>
      <h3>{userDetailData.email}</h3>
      <h3>{userDetailData.website}</h3>
      <h3>{userDetailData.phone}</h3>
      <br/>
      {/* <button onClick={}>Back</button> */}
      <Link to={'/users'}>Back</Link>
    </div>
  );
};

export default UsersDetail;
