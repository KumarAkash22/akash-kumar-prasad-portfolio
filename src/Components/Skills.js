import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
// import ProgressBar from './ProgressBar';
import html_img from '../img/portImages/html_img.png'
import css_img from '../img/portImages/css_img.jpg'
import js_img from '../img/portImages/js_img.png'
import mongodb_img from '../img/portImages/mongodb_img.png'
import nodejs_img from '../img/portImages/nodejs_img.png'
import postman_img from '../img/portImages/postman_img.png'
import tailwind_img from '../img/portImages/tailwind_img.png'
import redux_img from '../img/portImages/redux_img.png'
import react_img from '../img/portImages/react_img.png'




function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div>
                        <img src={html_img} className='img'/>
                        <img src={css_img} className='img'/>
                        <img src={js_img} className='img'/>
                    </div>
                    <div>
                        <img src={mongodb_img} className='img'/> 
                        <img src={nodejs_img} className='img'/>
                        <img src={postman_img} className='img'/>  
                    </div>
                    <div>
                        <img src={tailwind_img} className='img'/> 
                        <img src={redux_img} className='img'/>
                        <img src={react_img} className='img'/>  
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .img{
        width: 200px;
        height: 200px;
        margin: 30px;
    }
`;

export default Skills;
