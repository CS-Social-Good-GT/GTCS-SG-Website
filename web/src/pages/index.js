import React from "react"
import { Link } from "gatsby"
import Styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Styles = Styled.section`

`;

const IndexPage = () => (
  <Layout>
    <Styles>
    <SEO title="Home" />
      <div>
          <h1>GT CS + Social Good</h1>
          <p>We empower students to leverage technology for social good by inspiring action, facilitating collaboration, and forging pathways towards change.</p>
      </div>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Styles>
  </Layout>
)

export default IndexPage
