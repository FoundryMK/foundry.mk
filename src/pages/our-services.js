import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Services = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="Our Services" />
      <div style={{ margin: "20px 0 40px" }}>
        <h1>Our services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Viverra accumsan in nisl nisi. Sem integer vitae justo eget magna fermentum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio tempor orci dapibus ultrices in iaculis nunc sed. Leo integer malesuada nunc vel. Ut tristique et egestas quis. Nunc sed id semper risus in. Lectus urna duis convallis convallis tellus.
        </p>
        <img src="/droidworks170400137.jpg" />
        <ul>
          <li>
            <h3>Progressive Web Apps</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Viverra accumsan in nisl nisi. Sem integer vitae justo eget magna fermentum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio tempor orci dapibus ultrices in iaculis nunc sed. Leo integer malesuada nunc vel. Ut tristique et egestas quis. Nunc sed id semper risus in. Lectus urna duis convallis convallis tellus.
            </p>
          </li>
          <li>
            <h3>MVPs & Prototypes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Viverra accumsan in nisl nisi. Sem integer vitae justo eget magna fermentum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio tempor orci dapibus ultrices in iaculis nunc sed. Leo integer malesuada nunc vel. Ut tristique et egestas quis. Nunc sed id semper risus in. Lectus urna duis convallis convallis tellus.
            </p>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Services;

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
