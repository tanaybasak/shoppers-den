import React from 'react';
import SignIn from '../../components/signIn/signin.component';
import SignUp from '../../components/signup/signup.component';
import './authentication.style.scss';


const Authentication = () => (
    <div className="authentication">
        <SignIn />
        <SignUp />
    </div>
)


export default Authentication;