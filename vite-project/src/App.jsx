import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header"; import Footer from "./components/Footer"; 
import Home from "./pages/Home"; import Login from "./pages/Login";
 import Register from "./pages/Register"; import ProjectDetails from "./pages/ProjectDetails";
  import CreateProject from "./pages/CreateProject";
 import CreatorDashboard from "./pages/CreatorDashboard"; 
 import ProtectedRoute from "./components/ProtectedRoute";
 import AdminDashboard from "./pages/AdminDashboard";
import MyInvestments from "./pages/MyInvestments";
import About from "./pages/About";
import Contact from "./pages/Contact";
  const App = () => { return ( <BrowserRouter> <Header />
   <Routes> <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login />} /> 
   <Route path="/register" element={<Register />} /> 
   <Route path="/project/:id" element={<ProjectDetails />} /> 
   <Route path="/create" element={ <ProtectedRoute role="CREATOR"> <CreateProject /> </ProtectedRoute> } /> 
   <Route path="/creator" element={ <ProtectedRoute role="CREATOR"> <CreatorDashboard /> </ProtectedRoute> } /> 
   {/* 🌍 Public */}
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

{/* 💰 Investor */}
<Route
  path="/my-investments"
  element={
    <ProtectedRoute role="INVESTOR">
      <MyInvestments />
    </ProtectedRoute>
  }
/>

{/* 👑 Admin */}
<Route
  path="/admin"
  element={
    <ProtectedRoute role="ADMIN">
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
   </Routes> 
   <Footer /> </BrowserRouter> ); }; export default App;