// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/login";
// import Signup from "./pages/signup";
// import Dashboard from "./pages/dashboard";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// }
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import InstallGuide from "./pages/InstallGuide";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/install" element={<InstallGuide />} />
    </Routes>
  );
}
