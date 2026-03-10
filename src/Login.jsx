import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  async function login() {
    try {
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
        expiresInMins: 1, 
      });
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      navigate("/profile");
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        type="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={login}>submit</button>
    </div>
  );
}
