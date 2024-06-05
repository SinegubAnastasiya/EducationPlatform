import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './signup.module.css';

function SignUp() {
    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.info}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="surname" />
                    <input type="text" placeholder="email" />
                    <input type="text" placeholder="password" />
                    <button>Sign Up</button>
                </div>
                <div className={style.image}></div>
            </div>
        </div>
        <Footer />
    </div>
}

export default SignUp;