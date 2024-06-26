import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
              I am devoted to learn.
            </span>
        </div>

        <div className="about__box">
            <i class='bx bx-award'></i>

            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">
              2+ Projects
            </span>
        </div>

        <div className="about__box">
            <i class='bx bx-support'></i>

            <h3 className="about__title">Personality</h3>
            <span className="about__subtitle">
              Friendly
            </span>
            
        </div>
    </div>
  )
}

export default Info