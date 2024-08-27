import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashPage";
import Auth from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import CapsulePage from "./pages/CapsulePage";
const App = () => {

  const userDoc = {
    uid: "21DFw@34sdW",
    name: "John Doe",
    email: "john.doe@example.com",
    storageLeft: 1536
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/capsulepage" element={<CapsulePage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
