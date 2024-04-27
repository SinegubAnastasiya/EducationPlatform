import style from './footer.module.css'
import Item from './Item'

function Footer() {
    const arr = ['Home', 'Textbook', 'Statistics', 'Sprint']
    const arr2 = ['Alex', 'Gabriel', 'Marcus']

    const arrClassName = [style.face, style.img_GT, style.youtube]

    
    return (
        <div className={style.section_footer}>
            <div className={style.footer}>
                <div className={style.navigation}>
                    <div className={style.left_side}>
                        <Item array = {arr}></Item>
                    </div>

                    <div className={style.right_side}>
                        <Item array = {arr2}></Item>
                    </div>
                </div>

                <div className={style.line}></div>

                <div className={style.icons}>
                    <div className={style.left_icon}>
                        {arrClassName.map((el, index) => <div key = {index} className = {el}></div>)}

                    </div>

                    <p>©2021 Hschool. Project for Hschool.</p>

                </div>
            </div>
        </div>
    )
}

export default Footer
