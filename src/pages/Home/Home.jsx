import React from 'react'
import { ProfileCard, QuizCard, Sidebar } from '../../components'
import "./Home.css"


export const Home = () => {
  return (
    <div className="container__main">
      <Sidebar />
      <main className="main__quiz-sec">
        <div className="main__quiz-title">
          <h1 className="headline-2 txt-center">Sudo-Quiz</h1>
        </div>
        <div className="main__quiz-cat center__flex">
          <div className="quiz__linux">
            <QuizCard />
          </div>
          <div className="quiz__javascript">
            <QuizCard />
          </div>
        </div>
      </main>
      <ProfileCard />
    </div>

  )
}
