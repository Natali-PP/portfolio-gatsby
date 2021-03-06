import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const ReactDrumMachine = props => (
    <Layout>
        <div className="flex-project">
            <h1>React Drum Machine</h1>
            <h2>React, JS, CSS, HTML, Figma</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="natali-pp.github.io/fcc-drum-machine/ " />
                <ButtonGithub url="https://github.com/Natali-PP/FCC-drum-machine" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />
            

                <p>I've build this proyect following FreeCodeCamp's Curriculum, using React hooks</p>

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

export default ReactDrumMachine;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "react-drum-machine.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`