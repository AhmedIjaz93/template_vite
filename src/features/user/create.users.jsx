import React, { useEffect, useState } from "react";
import "./createUser.css";
import { createUser } from "../../services/apis/userService";

const CreateUser = () => {
  const [newUser, setNewUser] = useState(null);
  useEffect(() => {
    (async function () {
      const createdUser = await createUser({
        title: "Ahmed",
        body: "Software Engineer",
        userId: 1,
      });
      setNewUser(createdUser);
    })();
  }, []);
  return (
    <div className="create-user-wrapper">
      <div className="create-user-box box-wrapper">
        <h1 className="heading-page">{"Creating a User"}</h1>
        {newUser && (
          <>
            <p>New user</p>
            <div>Name: {newUser?.title}</div>
            <div>Designation: {newUser?.body}</div>
          </>
        )}
      </div>
    </div>
  );
};
export default CreateUser;
