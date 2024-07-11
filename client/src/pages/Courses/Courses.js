import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from "./courses.module.css"
import axios from 'axios'
import { Link } from "react-router-dom"

function Courses() {
    const sections = [
        {
            course: 'Javascript', description: 'JavaScript is a practical course where students learn the basics of JavaScript. It covers variables, operators, conditionals, loops, functions, and data manipulation.',
            image: style.image_1
        },
        {
            course: 'Typescript', description: 'TypeScript is a course that provides an introduction to TypeScript. Students will learn about TypeScript\'s key features, such as type annotations, interfaces, classes, and modules',
            image: style.image_2
        },
        {
            course: 'Python', description: 'Students will learn about variables, data types, conditionals, loops, functions, and file handling. Through hands-on exercises and projects, students will gain proficiency in writing Python code and solving real-world problems.',
            image: style.image_3
        }
    ]

    const [data, setData] = useState([])

    const getAllCourses = async () => {
        const response = await axios.get('http://localhost:3001/course')
        setData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getAllCourses()
    }, [])

    return <div>
        <Header />
        <div className={style.background}>

            <div className={style.wrapper}>
                <div className={style.title_courses}>
                    <div className={style.icon}></div>
                    <h1>Courses</h1>
                </div>
            </div>

            {data.map((el, index) => <Link key={index} to={`/singleCourse/${el.id}`}>
                <div className={style.section}>
                    <div className={style.image}></div>
                    <div>
                        <h1>{el.course}</h1>
                        <div className={style.baseline}></div>
                        <p>{el.description}</p>
                    </div>
                </div>
            </Link>)}

        </div>

        <Footer />
    </div>
}

export default Courses