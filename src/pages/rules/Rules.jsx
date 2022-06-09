import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProfileCard, Sidebar } from '../../components'
import { useQuiz } from '../../contexts'
import { ACTION_TYPE } from '../../utils'
import "./Rules.css"


export const Rules = () => {
    const { CLEAR_ALL } = ACTION_TYPE
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz()

    const startHandler = (categoryName) => {
        navigate(`/questions/${categoryName}`);
    }

    // * Reseting all values here
    useEffect(() => {
        quizDispatch({
            type: CLEAR_ALL,
        })
    }, [CLEAR_ALL, quizDispatch])

    return (
        <div className="container__main">
            <Sidebar pageTitle={"Rules"} />
            <main className="main__rules-sec">
                <div className="main__quiz-title">
                    <h2 className="headline-2 margin-2rem txt-center">Rules</h2>
                </div>
                <div className="center__flex flex__dir-col">
                    <section>
                        <h3 className="text-mid">Read carefully before starting <span className='text-primary'>{categoryName}</span> quiz...</h3>
                    </section>
                    <section>
                        <ul className="list-hand margin-2rem rules__sec">
                            <li className="text-mid"> There will be total of 5 questions in each quiz.</li>
                            <li className="text-mid"> Each question have 10 points.</li>
                            <li className="text-mid"> No negative points for now.</li>
                            <li className="text-mid"> Each question have only one correct answer.</li>
                            <li className="text-mid"> No time limit to solve question.</li>
                        </ul>
                    </section>
                    <section>
                        <button to={"/"} className="btns btn__primary margin__lr-4px border__rad-4px" onClick={() => startHandler(categoryName)}>Start</button>
                        <Link to={"/"} className="btns btn__secondary margin__lr-4px border__rad-4px">Home</Link>
                    </section>
                </div>
            </main>
            <ProfileCard />
        </div>

    )
}
