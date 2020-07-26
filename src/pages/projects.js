import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled, { createGlobalStyle } from "styled-components"

const ProyectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin: 0 2.5rem 0 3.5rem;
    div {
        display:flex;
        justify-cotent:center;
        align-items:center;
        flex-direction:column;
    }

    h1 {
        font-size:1.75rem;
    }

    h2 {
        font-size:1.25rem;
        font-family: 'Roboto';
        background-color:#FDC403;
    }
`

const ProyectText = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.tecn}</h2>
    </div>
);

const Projects = props => (
    <Layout>
        <h1>Projects</h1>

        <ProyectsGrid>
            <Link to="asistocovid">
                <div>
                    <ProyectText title="Asistocovid" tecn="React, Angular, JS, CSS, HTML, Figma" />
                    <Img 
                            fixed={props.data.imageOne.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>

            <Link to="animated-city-landing">
                <div>
                    <ProyectText title="Animated City Landing" tecn="JS, GSAP, CSS, HTML, Figma" />
                    <Img 
                            fixed={props.data.imageTwo.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>

            <Link to="mern-excercise-tracker">
                <div>
                    <ProyectText title="MERN Excercise Tracker" tecn="MongoDB, Node, Express, React, Material-UI" />
                    <Img 
                            fixed={props.data.imageThree.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>

            <Link to="react-drum-machine">
            <div>
                <ProyectText title="React Drum Machine" tecn="React, JS, CSS, HTML, Figma"/>
                <Img 
                        fixed={props.data.imageReactDrum.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
            </div>
            </Link>

            <Link to="react-quote-machine">
                <div>
                    <ProyectText title="React Random Quote" tecn="React, JS, CSS, HTML, Figma"/>
                    <Img 
                            fixed={props.data.imageQuoteMachine.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>
            <Link to="react-pomodoro-clock">
                <div>
                    <ProyectText title="React Pomodoro Clock" tecn="React, JS, CSS, HTML"/>
                    <Img 
                            fixed={props.data.imagePomodoro.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>

            <Link to="bootcamp-met">
                <div>
                    <ProyectText title="MeT's Bootcamp Landing" tecn="JS, CSS, HTML, Zeplin"/>
                    <Img 
                            fixed={props.data.imageBootcampWeb.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>
            <Link to="drum-vainilla-js">
                <div>
                    <ProyectText title="JS Drum Machine" tecn="JS, CSS, HTML"/>
                    <Img 
                            fixed={props.data.imageDrumVainilla.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
            </div>
            </Link>

            <Link to="personal-blog">
                <div>
                    <ProyectText title="Personal Blog" tecn="Hugo, Go"/>
                    <Img 
                            fixed={props.data.imageBlogHugo.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />
                </div>
            </Link>

            <Link to="js-calculator">
            <div>
                <ProyectText title="React Calculator" tecn="React, JS, CSS, HTML"/>
                <Img 
                        fixed={props.data.imageCalculator.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
            </div>
            </Link>

            <Link to="grid-layout-css">
            <div>
                <ProyectText title="Grid Layout Blog" tecn="CSS, HTML"/>
                <Img 
                        fixed={props.data.imageGridBlog.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
            </div>
            </Link>

            <Link to="taco-bar">
            <div>
                <ProyectText title="Taco Bar Layout" tecn="CSS, HTML"/>
                <Img 
                        fixed={props.data.imageTacoBar.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
            </div>
            </Link>

            <Link to="js-documentation-page">
            <div>
                <ProyectText title="Javascript Documentation Page" tecn="CSS, HTML"/>
                <Img 
                        fixed={props.data.imageJSDoc.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
            </div>
            </Link>

        </ProyectsGrid>
        
    </Layout>
);

export default Projects;

export const pageQuery = graphql`
    query {
        imageOne: file( relativePath: { eq: "asistocovid.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageTwo: file( relativePath: { eq: "animated-city.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageThree: file( relativePath: { eq: "mern-tracker.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageBootcampWeb: file( relativePath: { eq: "bootcamp-web-met.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageGridBlog: file( relativePath: { eq: "gridblog.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageJSDoc: file( relativePath: { eq: "js-documentation.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageDrumVainilla: file( relativePath: { eq: "little-drum-vainillajs.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageBlogHugo: file( relativePath: { eq: "personal-blog-hugo.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imagePomodoro: file( relativePath: { eq: "pomodoro-clock.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageQuoteMachine: file( relativePath: { eq: "random-quote-machine.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageReactDrum: file( relativePath: { eq: "react-drum-machine.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
        imageTacoBar: file( relativePath: { eq: "taco-bar.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },  
        imageCalculator: file( relativePath: { eq: "calculator.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        }  
    }
`
