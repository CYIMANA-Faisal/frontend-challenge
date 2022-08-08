/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AdminView from "./views/Admin";
import {getMedicalDataAction} from "./../redux/actions/medicaldata-action"
import { useEffect } from "react";

const MedicalData = (props) => {
    const { getMedicalDataAction, user } = props;
    const getMedicalData = async () => {
        await getMedicalDataAction()
    }
    useEffect(() => {
        getMedicalData();
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

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMedicalDataAction: () => dispatch(getMedicalDataAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalData)