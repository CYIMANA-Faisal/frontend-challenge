import Lock from "./icons/Lock";
import Mail from "./icons/Mail";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSignInState, isLoadingState, isNotLoadingState, signInAsync } from "../features/signin/signInSlice";
import { medicalDataAsync } from "../features/medicalData/medicalDataSlice";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const {message, status, isLoading} = useSelector((state) => state.signIn);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLoginForm = async (e) => {
        e.preventDefault()
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        dispatch(isLoadingState())
        await dispatch(signInAsync(data))
        dispatch(isNotLoadingState())
        setTimeout(() => {
            dispatch(clearSignInState())    
        }, 3000)
    }
    useEffect(() => {
        if(status === 201){
            dispatch(medicalDataAsync())
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000)
        }
    }, [status, navigate, dispatch])
    return ( 
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-white w-[615px] shadow-md p-8 overflow-auto align-middle block justify-center border-t-8 border-t-yellow-500'>
                    <div className='w-full pt-8 pb-9'>
                        <h1 className='prose w-full text-center font-bold text-3xl'>Login Form</h1>
                    </div>
                    <form onSubmit={handleLoginForm}>
                        {
                            status === 201 ? (
                                <div className="bg-green-100 border-l-4 border-green-500 text-green-500 p-4 mb-6" role="alert">
                                    <p className="font-bold">Success Login</p>
                                </div>
                            ) : (
                                ''
                            )
                        }
                        {
                            status !== 201 && status !== undefined ? (
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
                            <input name="email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required disabled={isLoading} />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input name="password" type="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required disabled={isLoading} />
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
                        <p>Don't have account? <span className="text-yellow-500"><Link to="/sign-up">Signup</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;