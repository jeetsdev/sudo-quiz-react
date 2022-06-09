import React from 'react'
import { useNavigate } from 'react-router-dom'
import { cardImg } from "../../../assets"

export const QuizCard = ({ category }) => {

    const navigate = useNavigate();
    const playNowHandler = () => {
        navigate(`/rules/${category.name}`)
    }

    return (
        <div className="card card__e-commerce card__shadow grid margin-1rem border__rad-4px">
            {/* Card Upper section here */}
            <div className="card__sec-upper center__flex flex__dir-col">
                {/* Card image here */}
                <div className="card__upper-image center__flex">
                    <img
                        src={cardImg}
                        className="image__res"
                        alt="product"
                    />
                </div>
                {/*Card overlay section here  */}
                <div className="card__upper-overlay">
                    <div className="upper__overlay-btn">
                        <button className="btns btn__primary" onClick={playNowHandler}>Play Now</button>
                    </div>
                </div>
            </div>
            {/* Card Lower section here */}
            <div className="card__sec-lower flex__dir-col border__rad-4px">
                <h2 className="headline-3 margin__tb-8px text-primary">{category.title}.</h2>
                <p className="txt-grey">
                    {category.descr}.
                </p>
            </div>
        </div>
    )
}
