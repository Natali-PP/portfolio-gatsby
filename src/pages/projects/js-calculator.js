import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const JSCalculator = props => (
    <Layout>
        <div className="flex-project">
            <h1>React Calculator</h1>
            <h2>React, JS, CSS, HTML</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/FCC-calculator/" />
                <ButtonGithub url="https://github.com/Natali-PP/FCC-calculator" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />

            <p> React calculator using hooks, for the FCC's front end libraries certification </p>
        </div>
        
        
    </Layout>
)

export default JSCalculator;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "calculator.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`
