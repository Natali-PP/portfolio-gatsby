import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const ReactPomodoroClock = props => (
    <Layout>
        <div className="flex-project">
            <h1>React Pomodoro Clock</h1>
            <h2>React, JS, CSS, HTML</h2>
            <div className="flex-dir-row">
                <ButtonGithub url="https://github.com/Natali-PP/FCC-pomodoro-clock" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />
            

                <p>Little webapp for the pomodoro technique for time managment, where you can set up the timer for the session and break.</p>
                <p>This is a challenge to obtain frecodecamp's Frontend Libraries certificate</p>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>


                {/* <h4>Tecnologies used 💫</h4>
                <ul>
                    <li>MongoDb - MongoAtlas</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Axion</li>
                    <li>Material-UI && Material-UI Pickers</li>
                </ul> */}

                <p>This project was bootstrapped with <b>Create React App</b>.</p>
                {/* <h4> Funtionalities</h4>
                    <ul>
                        <li>Add new user</li>
                        <li>Add new exercise log</li>
                        <li>Edit logged exercise</li>
                        <li>Delete logged exercise</li>
                        <li>Show exercises of all users</li>
                    </ul> */}

            </div>
        
        
    </Layout>
)

export default ReactPomodoroClock;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "pomodoro-clock.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`