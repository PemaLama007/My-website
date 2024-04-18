import React from 'react'
import './Portfolio.css'
import Portofolios from './Portofolios'

const Portfolio = () => {
  return (
    <section className='work section container' id='portfolio'>
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">
            Most recent works
        </span>
        <Portofolios />
    </section>
  )
}

export default Portfolio