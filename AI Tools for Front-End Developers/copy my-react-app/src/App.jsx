import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./Website/Common/header";
import Footer from "./Website/Common/footer";

import Index from "./Website/Pages/Index";
import Menu from "./Website/Pages/Menu";
import AboutSection from "./Website/Pages/About";
import BookSection from "./Website/Pages/Book";
import AdminPage from "./Admin/ACommon/AdminPage";
//  import AdminPage from "./AdminPage";
import MenuAdd from "./Admin/ACommon/AddMenu";
import AuthForm from "./Website/Pages/Login";
import Cartdata from "./Website/Pages/CartData";
import Bill from "./Website/Pages/Bill";
import RoleBasedRoute from "./Website/Pages/RoleBasedRoute";
import NotFound from "./Website/Pages/NotFound";
import AdminDashboard from "./Admin/APages/AdminDashBoard";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
  {/* 🌐 Public Routes (no login needed) */}
  <Route path="/" element={<Index />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/about" element={<AboutSection />} />
  <Route path="/book" element={<BookSection />} />
  <Route path="/login" element={<AuthForm />} />

  {/* 👤 User Protected Routes */}
  <Route
    path="/cart"
    element={
      <RoleBasedRoute role="user">
        <Cartdata />
      </RoleBasedRoute>
    }
  />

  <Route
    path="/bill"
    element={
      <RoleBasedRoute role="user">
        <Bill />
      </RoleBasedRoute>
    }
  />

  {/* 🛠 Admin Protected Routes */}
  

  
  //Admin Dashboard Route
 <Route
          path="/admindashboard/*"
          element={
            <RoleBasedRoute role="admin">
              <AdminDashboard />
            </RoleBasedRoute>
          }
        />

  {/* ❓ Catch-all for 404 */}
     <Route path="*" element={<NotFound />} />
</Routes>
    
      <Footer />
    
    </BrowserRouter>
  );
}

export default App;