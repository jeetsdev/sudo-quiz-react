import { useEffect, useState } from "react";
import { useQuiz } from "../../../contexts";
import { useNavigate, useParams } from 'react-router-dom'
import { ACTION_TYPE } from "../../../utils";
import { loader } from "../../../assets";
import toast from "react-hot-toast";

export const QuestionCard = () => {
    const { quizState: { quizzes, currentIndex, currentQus, loading }, quizDispatch } = useQuiz();
    const { SET_CURRENT_QUS, SET_CURRENT_INDEX, SET_USER_ANS } = ACTION_TYPE;
    const { categoryName } = useParams();
    const [clickedOpt, setClickedOpt] = useState("");
    const navigate = useNavigate();

    const nextHandler = () => {
        if (clickedOpt) {
            quizDispatch({
                type: SET_CURRENT_INDEX,
                payload: currentIndex + 1,
            })
            setClickedOpt("");
            quizDispatch({
                type: SET_USER_ANS,
                payload: clickedOpt
            })
        }
        else {
            toast.error("Please select one option.")

        }

    }

    const submitHandler = () => {
        quizDispatch({
            type: SET_USER_ANS,
            payload: clickedOpt
        })
        navigate(`/result/${categoryName}`);
    }

    const optionHandler = (event) => {
        setClickedOpt(() => event.target.innerText);
    }

    useEffect(() => {
        const categoryQus = quizzes.filter(quiz => quiz.category === categoryName);
        quizDispatch({
            type: SET_CURRENT_QUS,
            payload: categoryQus[currentIndex],
        })
    }, [currentIndex, SET_CURRENT_QUS, quizDispatch, categoryName, quizzes])


    return (
        <div className="qus__card loader__container">
            {loading ?
                <div className="loader__img center__flex">
                    <img src={loader} alt="loader here" />
                </div> :
                <div>
                    <d iv className="qus__sec margin-2rem">
                        <div className="qus-title h4 margin__tb-8px">
                            <span className="text-primary">{currentIndex + 1}.</span>
                            <p>{currentQus?.question}</p>
                        </div>
                        {currentQus?.options?.map(option => {
                            return <div onClick={optionHandler} key={option}>
                                {clickedOpt === option ?
                                    <p className="qus-otpion clicked-option padding-1rem margin__tb-8px border__rad-4px">{option}</p>
                                    :
                                    <p className="qus-otpion padding-1rem margin__tb-8px border__rad-4px">{option}</p>}
                            </div>
                        })}
                    </d>
                    <div className="center__flex margin-1rem">
                        {currentIndex < 4 ? <button className="btns btn__primary border__rad-4px" onClick={nextHandler}>Next</button> : <button className="btns btn__primary border__rad-4px" onClick={submitHandler}>Submit</button>}
                    </div>
                </div>}

        </div>
    )
}
