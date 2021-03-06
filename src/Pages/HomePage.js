import React from 'react'
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import Particle from '../Components/Particle';
import Typical from 'react-typical';
import {AiFillTwitterCircle} from 'react-icons/ai'
function HomePage() {


    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm 
                   <span> 
                    <Typical
                    loop={Infinity}
                    wrapper="span"
                    steps={[
                        " Akash Kumar Prasad", 
                        1000,
                        " Web Developer",
                        1000,
                    ]}
                    />
                    </span>
                </h1><br/>
                <h4>
                    A Versatile Full Stack Web Developer.
                </h4>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/akash-kumar-prasad-781812190" target="_blank" 
                    rel="noreferrer"  className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/KumarAkash22" target="_blank"
                    rel="noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://twitter.com/Akashku16402182" target="_blank"
                    rel="noreferrer" className="icon i-youtube width">
                        < AiFillTwitterCircle style={{width:"20px ",height:"20px "}}/>
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    
    p{
        color: blueviolet;
        font-size: 50px;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .width{
                width: 48px;
            }
            .i-youtube{
                &:hover{
                    border: 2px solid #057fff;
                    color: #057fff;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
