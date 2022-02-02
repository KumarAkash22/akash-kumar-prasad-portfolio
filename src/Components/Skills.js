import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import {AiFillHtml5} from 'react-icons/ai'
import {FaReact} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiPostman} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'



function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className='container' >
                        <div >
                        <AiFillHtml5 className='techstackicon'/>
                         <p className='text'>HTML</p>
                        </div>
                        <div >
                        <FaCss3Alt className='techstackicon'/>
                        <p className='text'>CSS</p>
                        </div>
                        <div >
                        <SiJavascript className='techstackicon'/>
                        <p className='text'>JavaScript</p>
                        </div>
                        <div >
                        <SiMongodb className='techstackicon'/>
                        <p className='text'>MongoDb</p>
                        </div> 
                        <div >
                        <FaNodeJs className='techstackicon'/>
                        <p className='text'>Node JS</p>
                        </div>
                        <div >
                        <SiPostman className='techstackicon'/>  
                        <p className='text'>Postman</p>
                        </div>
                        <div >
                        <SiTailwindcss className='techstackicon'/> 
                        <p className='text'>Tailwind</p>
                        </div>
                        <div >
                        <SiRedux className='techstackicon'/>
                        <p className='text'>Redux</p>
                        </div>
                        <div >
                        <FaReact className='techstackicon'/>
                        <p className='text'>React</p>
                        </div>  
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .img{
        width: 200px;
        height: 200px;
        margin-top: 20px;
        padding: 30px;
        border-radius: 15px;
        &:hover{
                    /* border: 2px solid #057fff; */
                    color: #057fff;
                }
    }
    .techstackicon{
        width: 200px;
        height: 200px;
        margin-top: 20px;
        padding: 30px;
        border-radius: 15px;
        /* border: 3px solid red; */
        &:hover{
                    /* border: 2px solid #057fff; */
                    color: #057fff;
                }
        @media screen and (max-width: 700px){
            width: 120px;
            height: 120px;
        }        
    }
    .text{
        font-size:'30px';
        /* border: solid 3px purple; */
        /* color: goldenrod; */
        margin-left: 20%;
        
    }
    /* .container{
        display: grid;
        grid-template-columns: auto auto;
    } */
`;

export default Skills;
