import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="main__menu-sec center__flex flex__dir-col">
            <div className="menu__title-sec">
                <h2>Home</h2>
            </div>
            <div className="menu__option-sec center__flex flex__dir-col">
                <a href="" className="center__flex margin__tb-8px menu__option-active">
                    <i className="fas fa-home" />
                </a>
                <a href="pages/result.html" className="center__flex margin__tb-8px">
                    <i className="fas fa-list-alt" />
                </a>
                <a href="" className="center__flex margin__tb-8px">
                    <i className="fas fa-chart-bar" />
                </a>
                <a href="" className="center__flex margin__tb-8px">
                    <i className="fas fa-question-circle" />
                </a>
                <a href="" className="center__flex margin__tb-8px">
                    <i className="fas fa-user-circle" />
                </a>
            </div>
        </aside>
    )
}
