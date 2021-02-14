import React, { useRef } from 'react';
import { auth } from "../firebase";
import "./css/SignupScreen.css";

function SignupScreen() {

    const emailRef = useRef(null); // could use useState() to track email and password input, this is more performant.
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault(); // prevent refresh

    }

    const signIn = (e) => {
        e.preventDefault(); // prevent refresh
        
    }
    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" />
                <input placeholder='Password' type="password" />
                <button onClicl={signIn} type="submit">Sign In</button>
                <h4>
                    <span className='signupScreen__gray'> New to Netflix? </span>
                    <span className='signupScreen__link' onClick={register}>Sign up now.</span>
                </h4>
            </form>
        </div>
    )
}

export default SignupScreen
