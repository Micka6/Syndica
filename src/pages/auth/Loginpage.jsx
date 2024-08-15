import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../css/auth/login.css'
import bjmplogo from '../../assets/res/Homepage/bjmp-logo.png'
import syndicalogo from '../../assets/res/auth/logo-var2.png'

const Loginpage = () => {
  return (
    <>
        <div className="login__container flex justify-center items-center w-screen h-screen overflow-hidden ">
            <div className="login__inner flex flex-wrap w-7/12 h-4/6 rounded-3xl overflow-hidden shadow-gray-500">
                <div className="login__card w-6/12 flex justify-center items-center flex-col gap-4">
                    <img className="w-32" src={bjmplogo} alt="" />
                    <h1 className="text-center text-xl">Bureau of Jail Management<br/>and Penology</h1>
                </div>
                <div className="login__card w-6/12 px-16">
                    <form className="login__form w-full h-full flex flex-col justify-center items-center gap-2" action="">
                            <img className="w-40 pb-4" src={syndicalogo} alt=""/>

                            <div className="login__row w-full">
                                <h1 className="text-2xl w-full">LOGIN TO YOUR ACCOUNT</h1>
                                <p className="text-sm w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet minima natus aliquid aut mollitia magnam voluptatem dolor!</p>
                            </div>

                            <div className="login__row w-full">
                                <label className="w-full font-medium" htmlFor="login__emailField">Email Address</label>
                                <input className="w-full p-2 rounded-lg h-10 bg-neutral-200" type="email" name="emailField" id="login__emailField" placeholder="example@gmail.com"/>
                            </div>

                            <div className="login__row w-full">
                                <label className="w-full font-medium" htmlFor="login__passwordField">Password</label>
                                <input className="w-full h-10 p-2 rounded-lg bg-neutral-200" type="password" name="passwordField" id="login__passwordField" placeholder="Enter your password"/>
                            </div>

                            <div className="login__row w-full flex items-center justify-between">
                                <div className="w-fit h-full flex justify-start items-center gap-1">
                                    <input  type="checkbox" name="rememberMeCheckbox" id="login__rememberMeCheckbox" />
                                    <label className="login__remember-label font-light text-xs" htmlFor="login__rememberMeCheckbox">Remember Me</label>
                                </div>
                                <Link className="forgot-password__return text-xs font-semibold" to="/forgot-password">Forgot Password</Link>
                            </div>
                            <input className="login__submit w-full h-10 rounded-lg font-semibold button-hover mt-2" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Loginpage