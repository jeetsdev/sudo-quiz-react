import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { ProfileCard, Sidebar, ResultCard } from "../../components";
import { useQuiz } from '../../contexts';
import { ACTION_TYPE } from '../../utils';
import "./Result.css"



export const Result = () => {
    const { categoryName } = useParams();
    const { quizState: { quizzes, userAns }, quizDispatch } = useQuiz();
    const categoryQus = quizzes.filter(quiz => quiz.category === categoryName);
    const { SET_USER_SCORE } = ACTION_TYPE;

    // Getting total score here
    const scoreReducer = (totalScore, currentQus, currentIndex) => {
        return currentQus.answer === userAns[currentIndex] ? { ...totalScore, score: totalScore.score += 10 } : { ...totalScore };
    }
    const finalScore = categoryQus.reduce(scoreReducer, { score: 0 });

    // Setting final score here
    useEffect(() => {
        quizDispatch({
            type: SET_USER_SCORE,
            payload: finalScore.score,
        })
    }, [quizDispatch, SET_USER_SCORE, finalScore.score])


    return (
        <div className="container__main">
            <Sidebar pageTitle={"Result"} />
            <main className="main__result-sec">
                <div className="main__quiz-title">
                    <h1 className="headline-2 txt-center">Result</h1>

                </div>
                <div className="main__quiz-cat center__flex flex__dir-col loader__container">
                    <div className="result__score-sec">
                        <p className="text-primary">Final Score :<span className='margin__lr-8px'>{finalScore.score}/{categoryQus.length * 10}</span></p>
                    </div>
                    {
                        categoryQus.map((question, index) => {
                            return <ResultCard currentQus={question} currentIndex={index} />
                        })
                    }
                    <Link to={"/"} className='btns btn__primary border__rad-4px margin-1rem'>Home</Link>
                </div>
            </main>
            <ProfileCard />
        </div>

    )
}
