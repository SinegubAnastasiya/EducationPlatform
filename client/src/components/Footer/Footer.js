import style from './footer.module.css'

function Footer() {
    return (
        <div className={style.section_footer}>
            <div className={style.footer}>
                <div className={style.navigation}>
                    <div className={style.left_side}>
                        <p>Home</p>
                        <p>Textbook</p>
                        <p>Statistics</p>
                        <p>Sprint</p>
                    </div>

                    <div className={style.right_side}>
                        <p>Alex</p>
                        <p>Gabriel</p>
                        <p>Marcus</p>
                    </div>
                </div>

                <div className={style.line}></div>

                <div className={style.icons}>
                    <div className={style.left_icon}>
                        <div className={style.face}></div>
                        <div className={style.img_GT}></div>
                        <div className={style.youtube}></div>
                    </div>

                    <p>©2021 Hschool. Project for Hschool.</p>

                </div>
            </div>
        </div>
    )
}

export default Footer
