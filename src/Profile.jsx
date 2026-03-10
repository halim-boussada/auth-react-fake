import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  var navigate = useNavigate();
  const [user, setUser] = useState({});

  async function refreshOurToken() {
     const { data } = await axios.post('https://dummyjson.com/auth/refresh' , {
        refreshToken : localStorage.getItem("refreshToken")
     })
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }

  async function getUserData() {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch {
      navigate("/");
    }
  }

  function logout(){
     localStorage.clear()
      navigate("/");

  }

  useEffect(() => {
    refreshOurToken()
    getUserData();
  }, []);

  return <div>
    <h1>this is Profile for {user.firstName} </h1>
    <button onClick={logout} >logout</button>
  </div>;
}
