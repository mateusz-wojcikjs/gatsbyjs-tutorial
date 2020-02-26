import React from "react";
import Layout from "../layout/Layout";
import StyledHero from "../layout/StyledHero";
import { graphql } from "gatsby";
import Contact from "../layout/Contact/Contact";

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}></StyledHero>
      <Contact />
    </Layout>
  );
};

export const query = graphql`
  {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default contact;
