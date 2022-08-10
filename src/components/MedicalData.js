/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import AdminView from "./views/Admin";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from 'jwt-decode'
import {  clearMedicalDataState } from "../features/medicalData/medicalDataSlice";
import PatientView from "./views/Patient";
import PharmacistsView from "./views/Pharmacists";
import PhysicianView from "./views/Physician";
import { clearSignInState } from "../features/signin/signInSlice";
import { clearSignUpState } from "../features/signup/signUpSlice";

const MedicalData = (props) => {
    const token = localStorage.getItem('accessToken')
    var decoded = jwt_decode(token);
    const dispatch = useDispatch();
    const {data} = useSelector((state) => state.medicalData);

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        dispatch(clearMedicalDataState())
        dispatch(clearSignUpState())
        dispatch(clearSignInState())
    }

    return ( 
        <> 
            <div className="flex justify-center items-center">
                <div className="shadow-md w-5/6 bg-white p-4">
                    <div className="bg-yellow-500 p-4 flex justify-between mb-4">
                        <p className="text-white text-xl prose font-bold">Welcome back: {decoded?.firstName}</p>
                        <button onClick={handleLogout} className="bg-transparent hover:bg-white text-white font-semibold hover:text-yellow-500 py-2 px-4 border border-white hover:border-transparent rounded">
                            <Link to="/" >Logout</Link>
                        </button>
                    </div>
                    {decoded?.role === 'ADMIN' && <AdminView data={data} /> }
                    {decoded?.role === 'PATIENT' && <PatientView data={data} /> }
                    {decoded?.role === 'PHYSICIAN' && <PhysicianView data={data} /> }
                    {decoded?.role === 'PHARMACIST' && <PharmacistsView data={data} /> }
                </div>
            </div>
        </>
    );
}

export default MedicalData;