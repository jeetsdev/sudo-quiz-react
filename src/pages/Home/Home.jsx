import React from 'react'
import { loader } from '../../assets'
import { ProfileCard, QuizCard, Sidebar } from '../../components'
import { useQuiz } from '../../contexts'
import "./Home.css"


export const Home = () => {

    const { quizState: { categories, loading } } = useQuiz();

    return (
        <div className="container__main">
            <Sidebar pageTitle={"Home"} />
            <main className="main__quiz-sec">
                <div className="main__quiz-title">
                    <h1 className="headline-2 txt-center">Sudo-Quiz</h1>
                </div>
                <div className="main__quiz-cat center__flex loader__container">
                    {loading && <div className="loader__img center__flex">
                        <img src={loader} alt="loader here" />
                    </div>}
                    {categories?.map(category => {
                        return <QuizCard category={category} key={category.name} />
                    })}
                </div>
            </main>
            <ProfileCard />
        </div>

    )
}
