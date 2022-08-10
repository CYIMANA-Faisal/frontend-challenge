import { Routes, Route } from "react-router-dom";
import Login from '../components/Login';
import Signup from "../components/Signup";
import MedicalData from "../components/MedicalData";
import ProtectedRoute from "./ProtectedRoute";

const Navigation = () => {
    return ( 
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/sign-up" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<MedicalData />} />
            </Route>
        </Routes>
    );
}
 
export default Navigation;