import React from "react"
import { Link } from "gatsby"
import Styled from 'styled-components'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroDiv from "../components/HeroDiv"
import AboutUs from "../components/AboutUs"
import TeamsDiv from "../components/TeamsDiv"
import WorkDiv from "../components/WorkDiv"
import Sponsors from "../components/Sponsors"
import Footer from "../components/Footer"


const Styles = Styled.section`
   //add any styles here (as if this were a css file)
   .container {
     width: 100vw;
   }
   `;

const IndexPage = () => (
  <Layout>
    <Styles>
    <SEO title="Home" />
      <div>
          <HeroDiv />
      </div>
      <div>
          <AboutUs />
      </div>
      <div>
          <TeamsDiv />
      </div>
      <div>
          <WorkDiv />
      </div>
      <div>
          <Sponsors />
      </div>
      <div>
          <Footer />
      </div>
    </Styles>
  </Layout>
)

export default IndexPage
