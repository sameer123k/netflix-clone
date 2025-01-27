import logo from './assets/images/logo1.png';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Notfound from './pages/notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboardheader from './Components/dashboardheader';
import Profile from './pages/profile-setting';
import Downloads from './pages/downloads';
import HelpCenter from './pages/helpcenter';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Dashboardheader" element={<Dashboardheader />} />
        <Route path="*" element={<Notfound />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Downloads" element={<Downloads />} />
        <Route path="HelpCenter" element={<HelpCenter />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
