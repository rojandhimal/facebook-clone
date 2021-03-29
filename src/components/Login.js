import React from "react";
import "./Login.css";
import fbLogo from "../images/facebook.png";
import fbLogoText from "../images/fb-text.png";
import { auth, provider } from "./firebase";

function Login() {
    const signIn = () => {
      auth.signInWithPopup(provider)
      .then(
        result =>{
          console.log(result);
        }
      ).catch((error) => alert(error.message) );
    };
  return (
    <div className="login">
      <div className="login__logo">
        <img src={fbLogo} alt="" />
        <img src={fbLogoText} alt="" />
      </div>
      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
