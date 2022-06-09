import React, {useState} from 'react';
import '../styles/SignUp.css';

const SignUp = ({ userRegistry }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSent, setIsSent] = useState(false);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        setIsSent(true);
        let value = {
            name,
            email,
            password
        };
        userRegistry(value);
        e.target.reset();
    }

    return(
        <form className='form' onSubmit={(e)=>onSubmitHandler(e)}>
            <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">{isSent ? "info Submitted" : "Send"}</button>
        </form>
    )
}

export default SignUp;