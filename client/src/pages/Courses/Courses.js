import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./courses.module.css"

function Courses() {
    return <div>
        <Header />
        <div className={style.background}>

            <div className={style.wrapper}>
                <div className={style.title_courses}>
                    <div className={style.icon}></div>
                    <h1>Courses</h1>
                </div>
            </div>

            <div className={style.section}>
                <div className={style.image_1}></div>
                <div>
                    <h1>JavaScript</h1>
                    <div className={style.baseline}></div>
                    <p>JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.</p>
                </div>
            </div>

            <div className={style.section}>
                <div className={style.image_2}></div>
                <div>
                    <h1>TypeScript</h1>
                    <div className={style.baseline}></div>
                    <p>TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript's key features, such as type annotations, interfaces, classes, and modules</p>
                </div>
            </div>

            <div className={style.section}>
            <div className={style.image_3}></div>
                <div>
                    <h1>Python</h1>
                    <div className={style.baseline}></div>
                    <p>Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.</p>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default Courses