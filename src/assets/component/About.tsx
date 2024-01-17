import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const About = () => {

  const { setUserName, userName } = useContext(GlobalContext);
  // const { userName } = useContext(GlobalContext);

  const [newUserName, setNewUserName] = useState("");
  let navigate = useNavigate();

  const changeUserName = (e: any) => {
    setNewUserName(e.target.value);
  };

  const updateUserName = () => {
    setUserName(newUserName);

    // console.log("setUserName>>>>>>>>" + setUserName);
  };
  return (
    <div>
      <h2> Hello {userName}</h2>

      <input onChange={changeUserName} />
      <br />
      <button onClick={updateUserName}>change user</button>
      <p>
        {newUserName} <br />
        If you are still facing issues, you may need to simplify your styling
        and stick to widely supported practices. Unfortunately, due to the
        limitations of email clients, achieving consistent styling can be
        challenging. Always refer to the specific documentation or support
        resources of the email clients you are targeting for the most accurate
        information on their CSS support. you are still facing issues, you may
        need to simplify your styling and stick to widely supported practices.
        Unfortunately, due to the limitations of email clients, achieving
        consistent styling can be challenging. Always refer to the specific
        documentation or support resources of the email clients you are
        targeting for the most accurate information on their CSS support.
      </p>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go to Home
      </button>
    </div>
  );
};

export default About;
