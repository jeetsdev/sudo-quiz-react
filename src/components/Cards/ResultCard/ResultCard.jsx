import React from 'react'
import { useQuiz } from '../../../contexts'

export const ResultCard = ({ currentQus, currentIndex }) => {
    const { quizState: { userAns } } = useQuiz();

    return (
        <div className="qus__card loader__container">
            <div>
                <div className="qus__sec margin-2rem">
                    <div className="qus-title h4 margin__tb-8px">
                        <span className="text-primary">{currentIndex + 1}.</span>
                        <p>{currentQus?.question}</p>
                    </div>
                    <div className="result__sec margin-2rem">
                        {currentQus.options.map((option, index) => {
                            if (option === userAns[currentIndex]) {
                                return currentQus.answer === option ?
                                    // If user ans is right
                                    <p className="result-option right-option padding-1rem margin__tb-8px border__rad-4px">{option}</p>
                                    :
                                    // If user ans is wrong
                                    <p className="result-option wrong-option padding-1rem margin__tb-8px border__rad-4px">{option}</p>
                            }
                            else if (currentQus.answer === option) {
                                return <p className="result-option right-option padding-1rem margin__tb-8px border__rad-4px">{option}</p>
                            }
                            else {
                                return <p className="result-option padding-1rem margin__tb-8px border__rad-4px">{option}</p>
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
