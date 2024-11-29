import Aside from "./assets/Components/Aside";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Exp from "./components/Exp";
import AddDoctor from "./pages/AddDoctor";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Exp />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/adddoctor" element={<AddDoctor />} />

          <Route path="/appointment" element={<Appointment />} />
          <Route path="/patients" element={<h1>Patients page</h1>} />
          <Route path="/staff" element={<h1>Staff page</h1>} />
          <Route path="/profile" element={<h1>Profile page</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
