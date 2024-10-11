import React from 'react'
import './education.css'
import IBM from '../../assets/ibm-logo.png'
import UNI from '../../assets/university-logo.png'
import GRADES from '../../assets/degree.pdf'
import { BiCheck } from "react-icons/bi";



const Education = () => {
  return (
    <section id='education'>
      <h5>Degree & Certification</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article className="education">
          <div className="education__head">
            <img className="education__img" src={UNI} alt='open university logo'/>
            <h3>B.sc Computer Science</h3>
          </div>

          <ul className="education__list">
          <li>
              <BiCheck className="education__list-icon"/>
              <p>Earned a B.Sc. in Computer Science with a <div className="bold">GPA of 85</div>, demonstrating strong academic performance.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon"/>
              <p>Completed the degree in <div className="bold">just 3 years</div>, showcasing dedication and efficient learning.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon"/>
              <p>Received the <div className="bold">Dean's Award for Excellence in 2023</div>, recognizing outstanding achievement and commitment to academic excellence.</p>
            </li>
          </ul>

          <a href={GRADES} className='btn btn-primary'>View Credentials</a>

        </article>

        <article className="education">
          <div className="education__head">
            <img className="education__img" src={IBM} alt='IBM logo'/>
            <h3>Front-End Developer Specialization</h3>
          </div>

          <ul className="education__list">
            <li>
              <BiCheck className="education__list-icon"/>
              <p>Developed responsive web applications using HTML, CSS, JavaScript, and React, focusing on enhancing user experience (UI/UX).</p>
            </li>
            <li>
              <BiCheck className="education__list-icon"/>
              <p>Managed source code and collaborated effectively using GitHub for version control, including branches and pull requests.</p>
            </li>
            <li>
              <BiCheck className="education__list-icon"/>
              <p>Learned to implement best practices in Agile methodologies, improving project management and collaboration throughout the development lifecycle.</p>
            </li>
          </ul>

          <a href='https://www.coursera.org/account/accomplishments/specialization/R3KC6OA2UNWO' className='btn btn-primary'>View Credentials</a>

        </article>
      </div>
    </section>
  )
}

export default Education
