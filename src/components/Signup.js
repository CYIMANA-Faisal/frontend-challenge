import Lock from "./icons/Lock";
import Mail from "./icons/Mail";
import User from "./icons/User";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Phone from "./icons/Phone";
import { useDispatch, useSelector } from "react-redux";
import { signUpAsync } from "../features/signup/signUpSlice";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [disableInput, setDisableInput] = useState(false);
    const [passwordMisMatch, setPasswordMisMatch] = useState(false);
    const [gender, setGender] = useState('');
    const dispatch = useDispatch();
    const {message, status} = useSelector((state) => state.signUp);
    let navigate = useNavigate();
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleSignUpForm = async (e) => {
        e.preventDefault()
        setDisableInput(true);
        if(e.target.elements.password.value !== e.target.elements.confirmPassword.value){
            setPasswordMisMatch(true)
            setTimeout(() => {setPasswordMisMatch(false)}, 10000)
            setDisableInput(false);
            return
        }
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            gender: gender,
            age: e.target.elements.age.value,
            phoneNumber: e.target.elements.phone.value,
            firstName: e.target.elements.firstName.value,
            lastName: e.target.elements.lastName.value,
            role: e.target.elements.role.value,
        }
        await dispatch(signUpAsync(data));
        setDisableInput(false);
    }
    useEffect(() => {
        if(status === 200) {
                setTimeout(() => {
                    navigate("/");
                }, 2000)
        }
    }, [status, navigate])
    return ( 
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-white w-[615px] shadow-md p-8 overflow-auto align-middle block justify-center border-t-8 border-t-orange-400'>
                    <div className='w-full pb-9'>
                        <h1 className='prose w-full text-center font-bold text-3xl'>Sign-up Form</h1>
                    </div>
                    <form onSubmit={handleSignUpForm}>
                        {
                            passwordMisMatch === true ? (
                                <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 mb-6" role="alert">
                                    <p className="font-bold">Error</p>
                                    <p>Password mismatch please comfirm the password</p>
                                </div>
                            ) : (
                                ''
                            )
                        }
                        {
                            status === 200 ? (
                                <div className="bg-green-100 border-l-4 border-green-500 text-green-500 p-4 mb-6" role="alert">
                                    <p className="font-bold">Success</p>
                                    <p>Registered successfully please login</p>
                                </div>
                            ) : (
                                ''
                            )
                        }
                        {
                            status !== 200 && status !== undefined ? (
                                <div className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 mb-6" role="alert">
                                    <p className="font-bold">Error</p>
                                    <p>{message}</p>
                                </div>
                            ) : (
                                ''
                            )
                        }
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Mail />
                            </div>
                            <input disabled={disableInput} name="email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                        </div>
                        <div className="relative flex justify-between mb-6">
                            <div className="w-[45%]">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <User />
                                </div>
                                <input disabled={disableInput} name="firstName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required/>
                            </div>
                            <div className="w-[45%]">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <User />                    
                                </div>
                                <input disabled={disableInput} name="lastName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required/>
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
                            <input name="age" type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Phone />                    
                            </div>
                            <input disabled={disableInput} name="phone" type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="078 XXX XXXX" required/>
                        </div>
                        <div className="flex items-center mb-6">
                            <input onChange={handleGender} name="gende" id="male" type="radio" value="MALE" className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">Male</label>
                            <input onChange={handleGender} name="gende" id="female" type="radio" value="FEMALE" className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="female" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">Female</label>
                        </div>
                        <div className="relative mb-6">
                            <select id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                <option value="" selected>Select your role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="PATIENT">Patient</option>
                                <option value="PHYSICIAN">Physician</option>
                                <option value="PHARMACIST">Pharmacist</option>
                            </select>
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input disabled={disableInput} name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input disabled={disableInput} name="confirmPassword" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Re-type Password" required/>
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
 
export default Signup;