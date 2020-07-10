import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const PersonalBlogHugo = props => (
    <Layout>
        <div className="flex-project">
            <h1>Personal Blog</h1>
            <h2>Hugo, Go</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/drum-kit/" />
                <ButtonGithub url="https://github.com/Natali-PP/drum-kit" />
            </div>
            <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />

            
            <p>Personal blog using Hugo and Go</p>
        </div>
        
        
    </Layout>
)

export default PersonalBlogHugo;

export const pageQuery = graphql`
    query {
        image: file( relativePath: { eq: "personal-blog-hugo.png" }) {
            childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
            }
        },
    }
`