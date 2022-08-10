import Lock from "./icons/Lock";
import Mail from "./icons/Mail";
import User from "./icons/User";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Phone from "./icons/Phone";
import { useDispatch, useSelector } from "react-redux";
import { clearSignUpState, signUpAsync, isLoadingState, isNotLoadingState } from "../features/signup/signUpSlice";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [passwordMisMatch, setPasswordMisMatch] = useState(false);
    const [gender, setGender] = useState('');
    const dispatch = useDispatch();
    const {message, status, isLoading} = useSelector((state) => state.signUp);
    let navigate = useNavigate();
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleSignUpForm = async (e) => {
        e.preventDefault()
        if(e.target.elements.password.value !== e.target.elements.confirmPassword.value){
            setPasswordMisMatch(true)
            setTimeout(() => {setPasswordMisMatch(false)}, 3000)
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
        dispatch(isLoadingState())
        await dispatch(signUpAsync(data));
        dispatch(isNotLoadingState())
        setTimeout(() => {
            dispatch(clearSignUpState())    
        }, 3000)
    }
    useEffect(() => {
        if(status === 200) {
                setTimeout(() => {
                    dispatch(clearSignUpState())
                    navigate("/");
                }, 2000)
        }
    }, [status, navigate, dispatch])
    return ( 
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-white w-[615px] shadow-md p-8 overflow-auto align-middle block justify-center border-t-8 border-t-yellow-500'>
                    <div className='w-full pb-9'>
                        <h1 className='prose w-full text-center font-bold text-3xl'>Responsive Registration Form</h1>
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
                            <input disabled={isLoading} name="email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                        </div>
                        <div className="relative flex justify-between mb-6">
                            <div className="w-[45%]">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <User />
                                </div>
                                <input disabled={isLoading} name="firstName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First name" required/>
                            </div>
                            <div className="w-[45%]">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <User />                    
                                </div>
                                <input disabled={isLoading} name="lastName" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last name" required/>
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
                            <input disabled={isLoading} name="phone" type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="078 XXX XXXX" required/>
                        </div>
                        <div className="flex items-center mb-6">
                            <input onChange={handleGender} name="gende" id="male" type="radio" value="MALE" className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="male" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">Male</label>
                            <input onChange={handleGender} name="gende" id="female" type="radio" value="FEMALE" className="w-4 h-4 text-yellow-500 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                            <input disabled={isLoading} name="password" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required/>
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input disabled={isLoading} name="confirmPassword" type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Re-type Password" required/>
                        </div>
                        <div className="relative mb-6">
                            {isLoading ? (
                                    <button type="submit" className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" disabled={isLoading}>  
                                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                        </svg>
                                        Loading...
                                    </button>
                            ) : (
                                <button type="submit" className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-500 font-medium w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" disabled={isLoading}>  
                                    Login
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="relative mb-6">
                        <p>Have account? <span className="text-yellow-500"><Link to="/">Sign-in</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;