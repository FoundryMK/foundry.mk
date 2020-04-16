import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Services = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title
  const servicesMdx = data.mdx;

  return (
    <Layout>
      <SEO title="Our Services" />
      <div style={{ margin: "20px 0 40px" }}>
        <h1>{servicesMdx.frontmatter.title}</h1>
        <MDXRenderer>{servicesMdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default Services;

export const servicesQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: {type: {eq: "page"}, path: {eq: "our-services"}}) {
      id
      frontmatter {
        title
        type
      }
      body
    }
  }
`;
