import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"
import Cuadrados3D from '../components/Cuadrados3D'
const Main = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Text = styled.div`
  position: absolute;
  display: inline-block;
  width: 500px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  left: 30%;
  line-height: 1em;
`
const Center = styled.div`
  text-align:center;
`

const StyledCuadrados = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: auto;
`
const Navbar = styled.div`
  position:absolute;
  top: 0;
  z-index:200;
`
const NotFoundPage = () => (
    <Main>
      <Navbar>
        <Layout />
      </Navbar>
      <SEO title="404: Not found" />
      <StyledCuadrados>
        <Cuadrados3D />
      </StyledCuadrados>
      <Text>
        <h1>NOT FOUND</h1>
        <Center><p>You just hit a route that doesn&#39;t exist... the sadness.</p></Center>
      </Text>
    </Main>
)

export default NotFoundPage;
