import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Contex/UserContex';

const SignUp = () => {
    // get contex
    const{ createEmailUser, SetUser} = useContext(AuthContext)
    const [strongPass, setPassStrong] = useState()
    // get form
    const formSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        // console.log(email, password, confirmPass);
        passwordStrong(password)
        // Matching password
        if (password !== confirmPass) {
            setPassStrong('Password Dosent match')
            return
        }

        // email create signup
        createEmailUser(email, password)
            .then(result => {
                const user = result.user;
                SetUser(user)
                form.reset()
                Navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                SetUser(errorMessage)
        })


    }

    const passwordStrong = (password) => {
        if (!/(?=.*[a-z])/.test(password)) {
            setPassStrong(' password must contain one lowercase letter.')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPassStrong(' password must contain one upercase letter.')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPassStrong('password must contain a single digit from 1 to 9.')
            return
        }
        if (!/(?=.*\W)/.test(password)) {
            setPassStrong(' password must contain  one special character.')
            return
        }
        if (password.length < 6) {
            setPassStrong('the password must be 8-16 characters long')
            return
        }
        if (password.length > 16) {
            setPassStrong('the password must be under 16 characters long')
            return
        }
    }
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Ema-Jhon
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <h5 className=' text-rose-600'>{strongPass}</h5>
                            {/* form start  */}

                            <form onSubmit={formSubmit} className="space-y-4 md:space-y-6" action="#">
                                {/* email section  */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                {/* password section  */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                {/* confirm password section  */}
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type="password" name="confirm" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                {/* terms and condition section  */}
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an Account</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Allredy Have an account? <Link to={'/log-in'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>        </div>
    );
};

export default SignUp;