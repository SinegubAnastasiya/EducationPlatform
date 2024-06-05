import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './signin.module.css';


function SignIn() {
    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                <h1>Login</h1>
                <input type="text" placeholder="login or email"/>
                <input type="text" placeholder="password"/>
                <button>Login</button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>

}

export default SignIn;