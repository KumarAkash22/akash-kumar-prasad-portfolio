import React from 'react'
import styled from 'styled-components';
import ak from '../img/ak.jpg';
import PrimaryButton from './PrimaryButton';


function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={ak} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Akash Kumar Prasad</span></h4>
                <p className="paragraph">
                Versatile Full Stack Web Developer possessing comprehensiveknowledge in JavaScript
                 algorithms, having basic skills of JavaScript, HTML,CSS with the ability of quickly 
                 adaptation tonew software packages and programming. Looking forward toupgrading my 
                 skills in a challenging work environment.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Qualification</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        
                    </div>
                    <div className="info">
                        <p>: Akash Kumar Prasad</p>
                        <p>: B.tech</p>
                        <p>: 23</p>
                        <p>: India </p>
                        <p>: English, Hindi</p>
                        <p>: Ajmer, Rajasthan</p>   
                    </div>
                </div>
                <a href={`resumecv.pdf`}download="Akash Kumar Prasad Resume.pdf" >
                <PrimaryButton title={'Download Cv'} /></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
