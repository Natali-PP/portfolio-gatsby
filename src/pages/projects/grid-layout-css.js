import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const GridBlogCSS = props => (
    <Layout>
        <div className="flex-project">
            <h1>Blog Layout</h1>
            <h2>CSS, HTML</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/CSS-Grid-Blog" />
                <ButtonGithub url="https://github.com/Natali-PP/CSS-Grid-Blog" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />

            
            <p>A blog layout using CSS Grid</p>
            
        </div>
        
        
    </Layout>
)

export default GridBlogCSS;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "gridblog.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`