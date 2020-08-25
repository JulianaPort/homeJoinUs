import React, { useState } from 'react';
import './buttonlogins.scss';


const ButtonLogin = () => {
    const [formState, setFormState] = useState('login');

    const handleFormState = (value: any) => {
        setFormState(value.value)
    }
    return (
        <div id="btn_login">
            <button
                type="button"
                id="signup"
                className={formState === 'signup' ?
                    "active button_icon" : "button_icon"}
                value="signup"

                onClick={(event) => handleFormState(event.target)}
            >
                Sign up
    </button>
            <button
                type="button"
                id="login"
                className={formState === 'login' ?
                    "active button_icon" : "button_icon"}
                value="login"
                onClick={(event) => handleFormState(event.target)}
            >
                Login
    </button>
        </div>
    )

}

export default ButtonLogin