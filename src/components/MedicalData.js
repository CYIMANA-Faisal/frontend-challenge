/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import AdminView from "./views/Admin";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMedicalDataAsync } from "../features/medicalData/medicalDataSlice";

const MedicalData = (props) => {
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user);
    // const medicalData = useSelector((state) => state.medicalData);
    const getmedicatData = async () => {
        await dispatch(getMedicalDataAsync())
    }
    useEffect(() => {
        getmedicatData()
    })
    return ( 
        <> 
            <div className="flex justify-center items-center">
                <div className="shadow-md w-5/6 bg-white p-4">
                    <div className="bg-orange-400 p-4 flex justify-between mb-4">
                        <p className="text-white text-xl prose font-bold">Welcome back: CYIMANA FAISAL</p>
                        <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-orange-400 py-2 px-4 border border-white hover:border-transparent rounded">
                            <Link to="/">Logout</Link>
                        </button>
                    </div>
                    <AdminView />
                </div>
            </div>
        </>
    );
}

export default MedicalData;