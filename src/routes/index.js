import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Signup from "../components/Signup";
import MedicalData from "../components/MedicalData";

const Navigation = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/dashboard" element={<MedicalData />} />
        </Routes>
    );
}
 
export default Navigation;