import Lock from "./icons/Lock";
import Mail from "./icons/Mail";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInAsync } from "../features/signin/signInSlice";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [disableInput, setDisableInput] = useState(false);
    const {message, status} = useSelector((state) => state.signIn);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLoginForm = async (e) => {
        e.preventDefault()
        setDisableInput(true);
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
        }
        await dispatch(signInAsync(data))
        setDisableInput(false);
    }
    useEffect(() => {
        // if(status === 201){
        //     setTimeout(() => {
        //         navigate("/dashboard");
        //     }, 2000)
        // }
    }, [status, navigate])
    return ( 
        <>
            <div className="flex justify-center items-center h-screen">
                <div className='bg-white w-[615px] shadow-md p-8 overflow-auto align-middle block justify-center border-t-8 border-t-orange-400'>
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
                            <input name="email" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required disabled={disableInput} />
                        </div>
                        <div className="relative mb-6">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <Lock />
                            </div>
                            <input name="password" type="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required disabled={disableInput} />
                        </div>
                        <div className="relative mb-6">
                            <button type="submit" className="focus:outline-none text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:ring-orange-400 font-medium w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" disabled={disableInput}>Login</button>
                        </div>
                    </form>
                    <div className="relative mb-6">
                        <p>Don't have account? <span className="text-orange-400"><Link to="/sign-up">Signup</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;