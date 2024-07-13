import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './signin.module.css';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function SignIn() {
    const email = useRef();
    const pwd = useRef();

    const navigate = useNavigate();

    async function getInp() {
        const data = { email: email.current.value, pwd: pwd.current.value, }
        const response = await axios.post('http://localhost:3001/api/auth', data, {
            withCredentials: true
        })
        console.log(response);
        navigate('/course')
    }

    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                <h1>Login</h1>
                <input ref={email} type="text" placeholder="login or email"/>
                <input ref={pwd} type="text" placeholder="password"/>
                <button onClick={getInp}>Login</button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>

}

export default SignIn;