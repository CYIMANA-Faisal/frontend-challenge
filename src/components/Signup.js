import Lock from "./icons/Lock";
import Mail from "./icons/Mail";
import User from "./icons/User";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { signUpAction } from "../redux/actions/signup-action";

const Signup = (props) => {
    const [disableInput, setDisableInput] = useState(false);
    const { signUpAction } = props;
    // const validatePassword = () => {

    // }
    const handleSignUpForm = async (e) => {
        e.preventDefault()
        setDisableInput(true);
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        await signUpAction(data)
        setDisableInput(false);
    }
    return ( 
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-white w-[615px] shadow-md p-8 overflow-auto align-middle block justify-center border-t-8 border-t-orange-400'>
                    <div className='w-full pb-9'>
                        <h1 className='prose w-full text-center font-bold text-3xl'>Sign-up Form</h1>
                    </div>
                    <form onSubmit={handleSignUpForm}>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Mail />
                            </div>
                            <input disabled={disableInput} name="email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <User />
                            </div>
                            <input disabled={disableInput} name="firstName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <User />                    </div>
                            <input disabled={disableInput} name="lastName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" />
                        </div>
                        <div className="relative mb-6">
                            <select id="roles" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Select your role</option>
                                <option value="admin">Admin</option>
                                <option value="patient">Patient</option>
                                <option value="physician">Physician</option>
                                <option value="pharmacists">Pharmacists</option>
                            </select>
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input disabled={disableInput} name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input disabled={disableInput} name="confirmPassword" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Re-type Password" />
                        </div>
                        <div className="relative mb-6">
                            <button disabled={disableInput} type="submit" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-400 font-medium w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Sign up</button>
                        </div>
                    </form>
                    <div className="relative mb-6">
                        <p>Have account? <span className="text-orange-400"><Link to="/">Sign-in</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        signUpAction: (data) => dispatch(signUpAction(data)),
    }
}
 
export default connect(mapDispatchToProps)(Signup)