import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import syndicalogo from '../../assets/res/auth/logo-var2.png'

const Forgotpasswordpage = () => {
    return (
        <>
        <div className="login__container flex justify-center items-center w-screen h-screen overflow-hidden ">
            <div className="login__inner flex flex-wrap w-7/12 h-4/6 rounded-3xl overflow-hidden flex-row-reverse">
                <div className="login__card w-6/12 flex justify-center items-center flex-col gap-4">
                    
                </div>
                <div className="login__card w-6/12 p-16 flex items-center flex-col">
                    <form className="login__form w-full h-full flex flex-col justify-start items-center gap-4" action="">
                        <img className="w-40 pb-2" src={syndicalogo} alt=""/>
                        <div className="login__row w-full">
                            <h1 className="text-2xl w-full">FORGOTTEN PASSWORD?</h1>
                            <p className="text-sm w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet minima natus aliquid aut mollitia magnam voluptatem dolor!</p>
                         </div>

                         <div className="login__row w-full">
                                <label className="w-full font-medium" htmlFor="login__emailField">Email Address</label>
                                <input 
                                    className="w-full p-2 rounded-lg h-10 bg-neutral-200" 
                                    type="email" 
                                    name="emailField" 
                                    id="login__emailField" 
                                    placeholder="example@gmail.com"
                                />
                        </div>
                        <input className="login__submit w-full h-10 rounded-lg font-semibold button-hover" type="submit" value="Reset Password" />
                    </form>
                    <Link className="forgot-password__return text-xs font-regular" to="/login">Return to <span className="font-semibold">Login</span></Link>
                </div>
            </div>
        </div>
    </>
    )
    }

export default Forgotpasswordpage