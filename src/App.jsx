import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Doctors from "./components/doctors/Doctors";
import Layout from "./components/layout/Layout";
import Home from "./components/home";
import DoctorDetail from "./components/doctors/DoctorDetail";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
