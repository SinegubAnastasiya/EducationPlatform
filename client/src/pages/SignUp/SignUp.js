import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './signup.module.css';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    const name = useRef();
    const surname = useRef();
    const email = useRef();
    const pwd = useRef();

    const navigate = useNavigate();
    
    async function getInp() {
        const data = {name: name.current.value,surname: surname.current.value, email: email.current.value, pwd: pwd.current.value }
        const response = await axios.post('http://localhost:3001/api/reg', data)
        console.log(response.data);
        navigate('/signIn')
    }

    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <input ref = {name} type="text" placeholder="name" />
                    <input ref = {surname} type="text" placeholder="surname" />
                    <input ref = {email} type="text" placeholder="email" />
                    <input ref = {pwd} type="text" placeholder="password" />
                    <button onClick={getInp}>Sign Up</button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>
}

export default SignUp;