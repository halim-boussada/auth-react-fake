import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Profile from "./Profile"
import Parent from "./Parent"

function App() {
  return (<>
   <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/profile" element={<Profile />} />
       <Route path="/parent" element={<Parent />} />
    </Routes>
  </>
  )
}

export default App
