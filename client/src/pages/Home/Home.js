import style from './home.module.css'

function Home() {
    return <div>
        <div className={style.header}>
            <p>Hschool</p>
            <div>
                <button className={style.btn_log}>Login →</button>
                <button className={style.btn_sign}>Sign Up</button>
            </div>
        </div>

        <div className={style.main}>
            <div>
                <h5>E-COURSE PLATFORM</h5>
                <h1>Learning and teaching online, made easy.</h1>
                <p>Any subject, in any language, on any device, for all ages!</p>

                <button>About platform</button>

                <div className={style.statist}>
                    <div className={style.num}>
                        <div className={style.lights_img}></div>
                        <p className={style.number}>600+</p>
                    </div>
                    <p>Students</p>
                </div>
            </div>

            <div className={style.student_img}></div>
        </div>

        <div className = {style.section_games}>
            <div className = {style.yoga_img}></div>
            
            <div className = {style.game_kinds}>
                <h1>Learn a language in a playful way</h1>
                <p>Make learning programming languages more fun with mini-games</p>
                <div className = {style.pictures}>
                    <div className = {style.pic_1}></div>
                    <div className = {style.pic_2}></div>
                </div>
            </div>
        </div>

        <div className = {style.section_practice}>
            <div className= {style.div}>
                <h1>Increase your knowledge</h1>
                <p>Traditional and new effective approaches to learning languages</p>
                <button>Textbook</button>
            </div>

            <div className = {style.girl_img}></div>
        </div>

        <div className = {style.section_statistics}>
            <div className = {style.people_img}></div>

            <div className= {style.progress}>
                <h1>Watch your progress every day</h1>
                <p>Save statistics on your achievements and mistakes</p>
                <button>Statistics →</button>
            </div>

        </div>
    </div>
}

export default Home