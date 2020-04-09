import React from "react";

import Landing from "../components/landing";
import SEO from "../components/seo";
import { Hero } from '../components/landing/Hero';
import { Services } from '../components/landing/Services';
import { Work } from '../components/landing/Work';
import { About } from '../components/landing/About';
import { Footer } from '../components/Footer';

const IndexPage = ({ data, location }) => {
  const siteTitle = "Foundry MK";
  const projects = data.allMdx.edges;

  return (
    <Landing location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`development`, `web applications`, `javascript`, `react`]}
      />
      <Hero />
      <Services />
      <Work projects={projects} />
      <About />
      <Footer />
    </Landing>
  );
};

export default IndexPage;

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {frontmatter: {type: {eq: "project"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
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
            highlight
          }
        }
      }
    }
  }
`;
