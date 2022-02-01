import React from 'react'
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import {IoOpenOutline  } from 'react-icons/io5'
function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt=""/>
                                <ul>
                                    <li>
                                        <a href={item.link1}  target="_blank"
                                         rel="noreferrer"> 
                                            <GitHub />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={item.link2} target="_blank"
                                           rel="noreferrer">
                                            <IoOpenOutline />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p><br/>
                            <p className='tech'>{item.tech}</p>
                            <div className='button'>
                                <div >
                                <a href={item.link1} target="_blank"
                                           rel="noreferrer"><GitHub className='size'/>
                                </a></div>
                                <div>
                                <a href={item.link2} target="_blank"
                                           rel="noreferrer">
                                <IoOpenOutline className='size' />
                                </a></div>
                                
                            </div>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:670px){
        grid-template-columns: repeat(1, 1fr);
    }
    .grid-item{
        .portfolio-content{
            display: block;
            position: relative;
            overflow: hidden;
            h6{
                font-size: 1.5rem;
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            ul{
                transform: translateY(-600px);
                transition: all .4s ease-in-out;
                position: absolute;
                left: 50%;
                top: 40%;
                opacity: 0;
                li{
                        background-color: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;
                        height: 3rem;
                        margin: 0 .5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
            }
            .tech{
                /* border: 1px solid red; */
                text-align: center;
                color: #ffffff;
            }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .button{
                    display:flex;
                    padding-left: 1rem;
                    font-size: 30px   ;
                    
            }
            .button > div {
                /* border: 2px solid #057fff; */
                border-radius: 15px;
                width: 60px;
                margin-left    : 70px;
                margin-top: 10px;
                    &:hover{
                    border: 2px solid #057fff;
                    color: #057fff;
                }
            }
            .size{
                height: 50px;
                width: 50px;
                
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }

                    li:hover{
                        svg{
                            color: var(--white-color);
                            height: 130px;
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
                &::before{
                    height: calc(100% - 48%) ;
                    width: calc(100% - 4%);
                    background-color: white;
                    opacity: 0.9;
                    transform-origin: left;
                    
                    transition: all .4s ease-in-out;
                }
            }
        }
    }
`;

export default Menu;
