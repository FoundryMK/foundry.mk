const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const projectPost = path.resolve(`./src/templates/project.js`);

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                type
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const mdx = result.data.allMdx.edges;

    const posts = mdx.filter(m => m.node.frontmatter.type === 'blog');

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: `${post.node.frontmatter.type}${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });

    const projects = mdx.filter(m => m.node.frontmatter.type === 'project');

    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node;
      const next = index === 0 ? null : projects[index - 1].node;

      createPage({
        path: `${project.node.frontmatter.type}${project.node.fields.slug}`,
        component: projectPost,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      });
    });

    return null;
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
