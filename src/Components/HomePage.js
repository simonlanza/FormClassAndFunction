import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import '../styles/HomePage.css';


const HomePage = () => {
    const [view, setView] = useState(<Home/>);
    const [userInfo, setUserInfo] = useState({name: "", email: "", password: ""})

    const handlerUserRegistry = ({name, email, password}) => {
        setUserInfo({name: name, email: email, password: password})
    }

    const handlerView = (arg) => {
        if(arg === "sign-up") {
            setView(<SignUp userRegistry={handlerUserRegistry}/>);
        } else if(arg === "sign-in") {
            setView(<SignIn userInfo={userInfo}/>);
        } else if(arg === "home") {
            setView(<Home/>);
        }
    }

    return (
        <div className='f-container'>
            <div className='button-container'>
                <button onClick={()=>handlerView("home")}>Home</button>
                <button onClick={()=>handlerView("sign-up")}>Sign Up</button>
                <button onClick={()=>handlerView("sign-in")}>Sign In</button>
            </div>
            <div>
                {
                    view
                }
            </div>
        </div>
    )
}

export default HomePage;