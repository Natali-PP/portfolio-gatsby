import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const animatedCityLanding = props => (
    <Layout>
        <div className="flex-project">
            <h1>Animated City Landing</h1>
            <h2>JS, GSAP, CSS, HTML, Figma</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/future-city-animated/" />
                <ButtonGithub url="https://github.com/Natali-PP/future-city-animated" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />
        </div>
        
    </Layout>
)

export default animatedCityLanding;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "animated-city.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`