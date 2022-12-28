// styels
import styles from "../../styles/auth/Auth.module.scss";

import MainContainer from "../../components/Containers/MainContainer";
import { Title } from "../../components/Titles/Title";

import { useState, useEffect } from "react";

const Auth = () => {
  // Login
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  // Register
  const [regEmail, setRegEmail] = useState("");
  const [regPw, setRegPw] = useState("");

  return (
    <MainContainer>
      {/* LOGIN */}
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <div className={styles.container}>
          <Title>Login</Title>
          <span>Email: </span>
          <input
            type="email"
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Password: </span>
          <input
            type="password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
            autoComplete="password"
          />
          {/* Login btn */}
          <button>Login Now</button>
        </div>
      </form>

      {/* REGISTER FORM */}
      <form
        action="submit"
        onSubmit={(e) => e.preventDefault()}
        className={styles.registerForm}
      >
        <div className={styles.container}>
          <Title>Register</Title>
          <span>Email: </span>
          <input
            type="email"
            onChange={(e) => e.target.value}
            value={regEmail}
            autoComplete="email"
          />
          <span>Password: </span>
          <input
            type="password"
            onChange={(e) => e.target.value}
            value={regPw}
            autoComplete="new-password"
          />

          {/* REGISTER BTN */}
          <button>Register Now</button>
        </div>
      </form>
    </MainContainer>
  );
};

export default Auth;
