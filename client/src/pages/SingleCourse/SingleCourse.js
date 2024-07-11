import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './singleCourse.module.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function SingleCourse() {
    const objectWithId = useParams()
    console.log(objectWithId);

    const [data, setData] = useState([])
    const getCourseById = async () => {
        const response = await axios.get(`http://localhost:3001/course/${objectWithId.id}`)
        setData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        getCourseById()
    }, [])

    return <div>
        <Header />
        <div className={style.background}>
            <div className={style.content}>
                <div className={style.content_left}>
                    <div className={style.discription}>
                        <div className={style.image_books}></div>
                        <div className={style.info}>
                            <h1>{data[0]?.course}</h1>
                            <p>{data[0]?.description}</p>

                        </div>
                    </div>
                    <button>Go to course</button>

                </div>
                <div className={style.tests}>
                    <h1>15 lessons</h1>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                    <p>1. Test</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}
export default SingleCourse;