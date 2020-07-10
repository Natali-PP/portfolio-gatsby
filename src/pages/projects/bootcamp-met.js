import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const BootcampWebMet = props => (
    <Layout>
        <div className="flex-project">
            <h1>React Drum Machine</h1>
            <h2>React, JS, CSS, HTML, Figma</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/Bootcamp-web/" />
                <ButtonGithub url="https://github.com/Natali-PP/Bootcamp-web" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />

            <h2>MeT's Bootcamp web landing page</h2>
            <p>I was able to reinforce what I already know, and learn new things, with the help of great professionals and mentors, in an inclusive and diverse envoirment sparkles It was a great experience!</p>
        </div>
        
        
    </Layout>
)

export default BootcampWebMet;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "bootcamp-web-met.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`