import React from 'react'
import { avatarImg } from '../../assets'

export const ProfileCard = () => {
    return (
        <aside className="main__profile-sec center__flex flex__dir-col">
            <h2 className="profile-title">Hello, Jeetsdev!</h2>
            <div className="profile__avatar-sec">
                <img
                    src={avatarImg}
                    alt="img-avatars"
                    className="avatars avatar-big border__rad-full margin-1rem"
                />
            </div>
            <div className="profile__stats-sec center__flex">
                <div className="stats__level margin__lr-8px">
                    <i className="fas fa-brain" />
                    <p>Level</p>
                    <p className="text-big txt-center">2</p>
                </div>
                <div className="stats__point margin__lr-8px">
                    <i className="fab fa-bitcoin" />
                    <p>Point</p>
                    <p className="text-big txt-center">500</p>
                </div>
            </div>
        </aside>
    )
}
