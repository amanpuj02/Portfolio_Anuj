import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll'

const Intro=() => {
    return (
        <div>
            <section id='intro'>
                <div className='introContent'>
                    <span className='hello' >Hello</span>
                    <span className='introText'>I'm <span className='introName'>Anuj</span><br/>Website Developer</span>
                    <p className='introPara'>I am a skilled web Developer with experience in creatin<br/> visually appealing and user friendly websites. </p>
                    <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg' />Hire Me</button></Link>

                </div>
                <img src={bg}  alt='profile' className='bg'/>


            </section>


        </div>
    )
}

export default Intro
