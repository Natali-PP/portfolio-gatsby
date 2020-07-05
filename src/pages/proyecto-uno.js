import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const ProyectoUno = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Un proyecto</h1>
    <p>Acá va a haber(?) un proyecto</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProyectoUno;
