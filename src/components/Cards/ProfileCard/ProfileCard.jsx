import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth, useQuiz } from '../../../contexts'
import { FaBrain, FaBitcoin } from "react-icons/fa"
import { avatarImg, notLoggedInImg } from "../../../assets"


export const ProfileCard = () => {

    const { authState: { user }, logout } = useAuth();
    const { quizState: { userScore } } = useQuiz();

    return (
        <div className="main__profile-sec center__flex flex__dir-col">
            {user ?
                <aside className='main__profile-login center__flex flex__dir-col'>
                    <h2 className="profile-title">Hello, Jeetsdev!</h2>
                    <div className="profile__avatar-sec">
                        <img
                            src={avatarImg}
                            alt="img-avatars"
                            className="avatars avatar-big border__rad-4px margin-1rem"
                        />
                    </div>
                    <div className="profile__stats-sec center__flex">
                        <div className="stats__level margin__lr-8px">
                            <FaBrain className='stats__icon' />
                            <p>Level</p>
                            <p className="text-big txt-center">1</p>
                        </div>
                        <div className="stats__point margin__lr-8px">
                            <FaBitcoin className='stats__icon' />
                            <p>Points</p>
                            <p className="text-big txt-center">{userScore}</p>
                        </div>
                    </div>
                    {user && <button className='btns btn__primary margin-1rem border__rad-4px' onClick={() => logout()}>Logout</button>}
                </aside>
                :
                <aside className='main__profile-logout center__flex flex__dir-col margin-1rem'>
                    <h2>Login to view your score.</h2>
                    <img className='image__res' src={notLoggedInImg} alt="" />
                    <Link to={"/login"} className='btns btn__primary border__rad-4px margin-1rem'>Login</Link>
                </aside>}
        </div>
    )
}
