import { ProfileCard, QuestionCard, Sidebar } from '../../components'
import "./Question.css"

export const Question = () => {
    
    return (
        <div className="container__main">
            <Sidebar pageTitle={"Questions"} />
            <main className="main__question-sec">
                <div className="main__quiz-title">
                    <h1 className="headline-2 txt-center">Questions</h1>
                </div>
                <div className="main__quiz-cat center__flex loader__container">
                    <QuestionCard />
                </div>
            </main>
            <ProfileCard />
        </div>

    )
}
