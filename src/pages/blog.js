import React from "react";
import Layout from "../layout/Layout";
import StyledHero from "../layout/StyledHero";
import { graphql } from "gatsby";

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}></StyledHero>
    </Layout>
  );
};

export const query = graphql`
  {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
