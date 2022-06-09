import React,{useState} from "react";
import '../styles/SignIn.css';

const SignIn = ({ userInfo }) => {
    const [signIn, setSignIn] = useState({ email: "", password: "" });
    const [show, setShow] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(signIn.email === userInfo.email && signIn.password === userInfo.password) {
            setShow(true);
        }
    }

    return (
        <div>
            {
                show?
                    <div className="h1-container">
                        <h1>Welcome {userInfo.name}</h1>
                    </div>
                :   <form className="form" onSubmit={(e)=> onSubmitHandler(e)}>
                        <input placeholder="email" type="email" onChange={(e)=> setSignIn({...signIn, email: e.target.value})} />
                        <input type="password" placeholder="password" onChange={(e)=> setSignIn({...signIn, password: e.target.value})} />
                        <button type="submit">Submit</button>
                    </form>
            }
        </div>
    )
}

export default SignIn;
