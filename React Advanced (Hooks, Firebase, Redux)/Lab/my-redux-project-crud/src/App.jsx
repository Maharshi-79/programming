import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./assets/features/Pages/Login"
import Home from "./assets/features/Pages/Home"
import Add_User from "./assets/features/Pages/Add_User"
import ManageUser from "./assets/features/Pages/ManageUser"
import Edit_user from "./assets/features/Pages/Edit_user"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/add_user" element={<Add_User/>}/>
        <Route path="/manage_user" element={<ManageUser/>}/>
        <Route path="*" element={<h1 className="text-center mt-5">404 Not Found</h1>}/>
        <Route path="/edit_user/:id" element={<Edit_user/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
