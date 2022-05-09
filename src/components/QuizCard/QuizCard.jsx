import React from 'react'
import { cardImg } from '../../assets'

export const QuizCard = () => {
    return (
        <div className="card card__e-commerce card__shadow grid margin-1rem">
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
                        <a href="/" className="btns btn__primary">
                            Play Quiz
                        </a>
                    </div>
                </div>
            </div>
            {/* Card Lower section here */}
            <div className="card__sec-lower center__flex flex__dir-col">
                <div className="center__flex lower__sec-details  flex__dir-col">
                    <h2 className="headline-3">Just Sudo it.</h2>
                    <p className="txt-grey txt-center">
                        Take this linux quiz to test your knowledge about linux
                        commands.
                    </p>
                    <div className="details__icon">
                        <i className="fas fa-share padding-8px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
