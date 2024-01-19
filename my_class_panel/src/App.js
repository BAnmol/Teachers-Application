import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Pages/Dashboard";
import Sidebar from './components/Sidebar/Sidebar';
import Batch from "./components/Pages/Batch";
import Attendance from "./components/Pages/Attendance";
import Students from "./components/Pages/Students";
import Profile from "./components/Pages/Profile";
function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/batch" element={<Batch />} />
              {/* <Route path="/students" element={<Students />} /> */}
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
