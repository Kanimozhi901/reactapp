
import React from 'react';
import './Login.css';

const Loginform = () => {
    return (
        <>
        <div className='c'>
            <div className="con1">
                <form action="">
                    <div className="hcon">
                        <p><b>Login form</b></p>
                        <p>Sign in with your username and password</p>
                    </div>
                    <div className="mcon">
                        <div className="m2con">
                            <label htmlFor="username">Your username</label><br />
                            <input type="text" name="username" id="uid" placeholder="Enter username" required /><br /><br />
                            <label htmlFor="pswrd">Your password</label><br />
                            <input type="password" name="pswrd" id="pid" placeholder="******" required />
                            <div className="subcon">
                            </div>
                            <label htmlFor="remember">
                                <input type="checkbox" name="remember" id="remember" checked="checked" />
                                Remember me
                            </label>
                            <p className="forgtpswrd"><a href="#">Forgot password?</a></p>
                        </div>
                        <div className="reg">
                            <button type="submit"><a href="/welcome.html">Login</a></button>
                            <p className="register">Not a member? <a href="#">Register here!</a></p>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
};

export default Loginform;