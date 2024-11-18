import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerificationEmailSent from "./pages/VerificationEmailSent";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute/>}/>
          <Route path="/" element={<Home/>}/>
        <Route/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification-sent" element={<VerificationEmailSent />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
      </Routes>
      
    </>
  );
}

export default App;
