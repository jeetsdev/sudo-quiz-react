import React from 'react'
import { Link } from 'react-router-dom'
import { notFound } from '../../assets'
import { ProfileCard, Sidebar } from '../../components'
import "./NotFound.css"

export const NotFound = () => {

  return (
    <div className='container__main'>
      <Sidebar pageTitle={"Ooops"} />
      <main className='error__sec center__flex flex__dir-col'>
        <img className='image__res error__sec-img' src={notFound} alt="not found" />
        <div className='center__flex'>
          <Link to={"/"} className='btns btn__secondary border__rad-4px'>Home</Link>
        </div>
      </main>
      <ProfileCard />
    </div>
  )
}
