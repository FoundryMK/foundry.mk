import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Contact = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="Contact" />
      <div style={{ margin: "20px 0 40px" }}>
        <h1>Contact us</h1>
        <p>For a free quote, consultation or just to say hi, you can reach us at any of these:</p>
        <ul>
          <li>Email: <a href="mailto:root@foundry.mk">root@foundry.mk</a></li>
          <li>Social media</li>
          <li>Phone: ++ 389 78 397 359</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contact;

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
