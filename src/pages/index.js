import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Navbar from "../layout/Navbar";
import Layout from "../layout/Layout";
import Banner from "../layout/Banner";
import About from "../layout/Home/About";
import Services from "../layout/Home/Services";
import StyledHero from "../layout/StyledHero";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Szukam kogoś kto zrobi mi taki kalendarz rezerwacji na dany dzień i godzinę aby mogli"
      >
        <AniLink to="/tours" className="btn-white">
          Explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
  </Layout>
);

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
