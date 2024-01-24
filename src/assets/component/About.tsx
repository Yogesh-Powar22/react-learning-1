import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import useToggle from "./useToggle";

const About = () => {

  const { setUserName, userName } = useContext(GlobalContext);
  // const { userName } = useContext(GlobalContext);

  const [newUserName, setNewUserName] = useState("");
  const [isVisible, toggle] = useToggle(false)

  let navigate = useNavigate();

  const changeUserName = (e: any) => {
    setNewUserName(e.target.value);
  };

  const updateUserName = () => {
    setUserName(newUserName);

    // console.log("setUserName>>>>>>>>" + setUserName);
  };
  return (
    <div className="container">
      <input className="bg-secondary text-light float-end" style={{ fontSize: '13px', padding: "8px 15px" }} type="button"
        onClick={() => {
          navigate("/");
        }}
        value="go to Home"
      />

      <h2> Hello {userName}</h2>

      <input onChange={changeUserName} placeholder="Change User Name..." />
      <br />
      {newUserName &&
        <div>
          <button onClick={updateUserName}>change user</button>

          <p>
            {newUserName} <br />
          </p>
        </div>
      }




    </div>
  );
};

export default About;
