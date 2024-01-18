import React from 'react';
import {FcGoogle} from 'react-icons/fc';

function LoginCard() {
    const google = () => {
        window.open('http://localhost:8080/auth/google', '_self');
    };

    return (
        <div className="max-w-xs mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="block text-sky-500 text-xl font-bold mb-2">Log In</h2>
            <p className="text-sky-500 text-base mb-4">
                By continuing, you agree to our <b>User Agreement</b> and acknowledge that you understand the <b>Privacy
                Policy</b>.
            </p>

            <div className="my-2 rounded border-2 border-blue-500 text-sky-500 font-bold hover:bg-blue-50 focus:shadow">
                <button className="flex w-full py-2 px-4 items-center justify-center gap-x-2" onClick={google}>
                    <FcGoogle/>
                    Continue with Google
                </button>
            </div>
        </div>
    );
}

export default LoginCard;