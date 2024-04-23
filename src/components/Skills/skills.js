import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'
const Skills=() =>{
  return (
    <div>
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experiencein creating visully appealing and user-friendly websites. I have a strong understanding of design and a keen eye fo detail . I am proficient in HTML,CSS ,JavaScript and React, as well as design software such as Adobe Photoshop and illustrator. </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='uidesgin' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text,you can write your own content here.</p>
                        </div> 
                </div>
                <div className='skillBar'>
                    <img src={WebDesign} alt='webdesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Design</h2>
                        <p>This demo text can be changed while making the production ready website.</p>
                        </div> 
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt='appdesign' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Design</h2>
                        <p>You can write text related to mobile app development.</p>
                        </div> 
                </div>
            </div>


        </section>
      
    </div>
  )
}

export default Skills
