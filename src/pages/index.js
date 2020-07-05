import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styled, { createGlobalStyle } from "styled-components"
import "../styles/main.css"

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Alata&family=Alatsi&family=Roboto:wght@400;700&display=swap');
    :root{
        --red: #E3001C;
        --yellow: #FDC403;
        --blue: #02519E;
        --ligth-blue: #8FA4B9;
        --pink:#DC4596;
        --orange:#F05632;
    }

`

const StyledLink = styled(Link)`
  color: var(--blue);
  text-align:center;
  font-size:4rem;
`

const SiteDescriptionSection = styled.section`
    font-family: 'Alata', sans-serif;
    font-size:1.25rem;
    color: var(--orange);
    text-align:center;
    padding: 1rem;
    margin: 2rem 1rem;
`

const FlexContainer = styled.div`
    display:flex;
`
const FlexContainerColumnCenter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 3.5rem 0;
    div {
        margin: 0 2rem;
        text-align: center;
    }
    h1 {
        font-size:1.75rem;
    }
    h2 {
        font-size:1.25rem;
        font-family: 'Roboto';
        background-color:var(--yellow);
    }
`
const ProyectRepeat = (props) => {
    if (props.innerwidth >= 600){
        return (
            <h1 className="portfolio">Portfolio <br />Portfolio <br/> Portfolio <br/></h1>
        )
    } else {
        return(
            <h1 className="portfolio">Portfolio <br /></h1>
        )
    }
}

const PreviewProyectText = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.tecn}</h2>
    </div>
);


const GridIntro = () => (
    <section id="me" class="grid-container">
        <h1 className="name1"> NATALI </h1> <br />                                             
        <h1 className="name2">PALACIO</h1>                                            
        <h1 className="name3">PASTOR</h1>                                            
        <div className="red-line"></div>                                             
        <div className="blue-line"></div>                                        
        <div className="yellow-line"></div>                                           
        <h1 className="portfolio">Portfolio <br /></h1>
        <ProyectRepeat innerwidth={window.innerWidth}></ProyectRepeat>

        <section className="me-description">    
            <p>Hi! I’m a <span class="bold">Javascript</span> developer from Argentina, and I can help you build AWESOME web       
                solutions. </p>                     
            <p>I search to balance function and form</p>                              
            <p>The technologies that I use are <span className="bold">HTML, CSS, Javascript, React</span> and <span                    
                    className="bold">Node.</span></p>         
            <p>Here you can see what i’ve built. If you are interested, <Link to="contact"><span   
                        className="bold bold-blue">let’s talk!</span></Link></p>                         
        </section>                                                             
    </section>

)

const IndexPage = (props) => (
        <Layout>
            <GlobalStyles />
            <SEO title="Portfolio Natalí Palacio Pastor - Home" />
            <GridIntro />
            
            <section>
                <h1>Some proyects</h1>
                <FlexContainerColumnCenter>
                    <PreviewProyectText title="Asistocovid" tecn="React, Angular, JS, CSS, HTML, Figma" />
                    <Img 
                        fixed={props.data.imageOne.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
                </FlexContainerColumnCenter>

                <FlexContainerColumnCenter>
                    <Img 
                        fixed={props.data.imageTwo.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
                    <PreviewProyectText title="Animated City Landing" tecn="JS, GSAP, CSS, HTML, Figma" />
                </FlexContainerColumnCenter>

                <FlexContainerColumnCenter>
                    <PreviewProyectText title="MERN Excercise Tracker" tecn="MongoDB, Node, Express, React, Material-UI" />
                    <Img 
                        fixed={props.data.imageThree.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    />
                </FlexContainerColumnCenter>
                <FlexContainerColumnCenter>
                    <StyledLink to="proyects">See all my proyects</StyledLink>
                </FlexContainerColumnCenter>
            </section>

            {/* TODO: alguna animacion al hacer hover, unos cuadrados festejando o corazones */}
            <SiteDescriptionSection>
                <h4>This site was built with GatsbyJS, React, CSS Grids and Flexbox! <i class="far fa-grin-stars"></i></h4>
                <h4>It's fully responsive and mobile-friendly <i class="fas fa-mobile-alt"></i></h4>
            </SiteDescriptionSection>

    </Layout>
);

export default IndexPage;

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
        }  
    }
`