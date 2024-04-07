import style from './header.module.css'

function Header() {
    return (
        <div className={style.section_1}>
            <div className={style.header}>
                <p>Hschool</p>
                <div>
                    <button className={style.btn_log}>Login →</button>
                    <button className={style.btn_sign}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header