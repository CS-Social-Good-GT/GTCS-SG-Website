import React from "react"
import { Link } from "gatsby"
import Styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroDiv from "../components/HeroDiv"
import AboutUs from "../components/AboutUs"
import TeamCardsDiv from "../components/TeamCardsDiv"
import WorkDiv from "../components/WorkDiv"
import Sponsors from "../components/Sponsors"
import Footer from "../components/Footer"
import MemberDiv from "../components/MemberCard"


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
      <div id="section-about">
          <AboutUs />
      </div>
      <div id='section-team'>
          <TeamCardsDiv />
      </div>
      {/* <div>
          <MemberDiv />
      </div> */}
      <div id='section-work'>
          <WorkDiv />
      </div>
      <div id='section-sponsors'>
          <Sponsors />
      </div>
      <div id='section-contact'>
          <Footer />
      </div>
    </Styles>
  </Layout>
)

export default IndexPage
