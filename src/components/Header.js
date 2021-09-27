import React, { useContext } from "react";
import {
  signInWithGoogle,
  signInWithGithub,
  logOut,
} from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser);
  const authButton = () => {
    let buttonDom;
    if (currentUser) {
      buttonDom = (
        <div>
          <button onClick={logOut}>ログアウト</button>
        </div>
      );
    } else {
      buttonDom = (
        <div>
          <button onClick={signInWithGoogle}>Googleログイン</button>
          <button onClick={signInWithGithub}>GitHubログイン</button>
        </div>
      );
    }
    return buttonDom;
  };

  return (
    <header>
      ヘッダー
      {authButton()}
    </header>
  );
};

export default Header;
