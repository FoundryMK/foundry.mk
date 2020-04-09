import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Layout } from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import styled from 'styled-components';

const Title = styled.h1`
  background: #31263e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40vh;
  margin: 0 0 2em 0;
  border-bottom: 12px solid transparent;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #f7931e 60%, #ee5622);
`;

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>{post.frontmatter.title}</Title>
        <div style={{ margin: "20px 0 40px" }}>
          <MDXRenderer>{post.body}</MDXRenderer>
          <ul
            style={{  
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`project${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`project${next.fields.slug}`} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: {type: {eq: "project"}}, fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
