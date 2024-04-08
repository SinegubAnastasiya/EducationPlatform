import style from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.section_1}>
            <div className={style.header}>
                <p>Hschool</p>
                <div>
                    <Link to = '/signIn'><button className={style.btn_log}>Login →</button></Link>
                    <Link to = '/signUp'><button className={style.btn_sign}>Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Header