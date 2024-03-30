import { useState, ChangeEvent, useEffect } from 'react';
import './LoginSignup.css'
import user_icon from '../../assets/circle_user_icon.png'
import phone_icon from '../../assets/circle_phone_icon.png'
import emial_icon from '../../assets/msg_fill_icon.png'
import enter_inside_icon from '../../assets/enter_inside_icon.png'
import { Link, useParams } from 'react-router-dom';

export default function LoginSignup() {
    const params = useParams<{ actionName: string }>();
    const [name, setName] = useState<string>('');
    const [emial, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    useEffect(() => {
        if (name !== "" && emial !== "" && password !== "") {
            document.getElementById("submitButton")?.innerHTML
        };
    }, [name, emial, password]);
    return (
        <div className="formpage">
            <div className="form-container">
                <div className="form-header">
                    <div className="form-text">{params.actionName}</div>
                    <div className="underline"></div>
                    <div className="home-icon">
                        <Link to="/"><img alt="enter home icon" src={enter_inside_icon}></img></Link>
                    </div>
                </div>
                <div className="inputs">
                    {params.actionName === "Login"
                        ? <div></div>
                        : <div className="input">
                            <img src={user_icon} alt="" />
                            <input type='text' placeholder='Name' onChange={handleNameChange} required />
                        </div>
                    }
                    <div className="input">
                        <img src={emial_icon} alt="" />
                        <input type='email' placeholder='Email' onChange={handleEmailChange} required />
                    </div>
                    <div className="input">
                        <img src={phone_icon} alt="" />
                        <input type='password' placeholder='password' onChange={handlePasswordChange} required />
                    </div>
                </div>
                {params.actionName === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password<span>Click Here</span></div>}
                <div className="submit-container">
                    <div id="submitButton" className={name !== "" && emial !== "" && password !== "" ? "submit black" : "submit"}>{params.actionName}</div>
                </div>
            </div>
        </div>
    )
}