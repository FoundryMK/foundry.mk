import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/layout"
import SEO from "../components/seo"

const About = ({ data }) => {
  const aboutMdx = data.mdx;

  return (
    <Layout>
      <SEO title="About Foundry" />
      <div style={{ margin: "20px 0 40px" }}>
        <h1>{aboutMdx.frontmatter.title}</h1>
        <MDXRenderer>{aboutMdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default About;

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: {type: {eq: "page"}, path: {eq: "about-us"}}) {
      id
      frontmatter {
        title
        type
      }
      body
    }
  }
`;
