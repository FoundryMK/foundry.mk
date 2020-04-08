import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const About = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <SEO title="About Foundry" />
      <div style={{ margin: "20px 0 40px" }}>
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra. Viverra accumsan in nisl nisi. Sem integer vitae justo eget magna fermentum. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Odio tempor orci dapibus ultrices in iaculis nunc sed. Leo integer malesuada nunc vel. Ut tristique et egestas quis. Nunc sed id semper risus in. Lectus urna duis convallis convallis tellus.
        </p>
        <img src="/droidworks170400137.jpg" />
        <p>
          Hac habitasse platea dictumst vestibulum. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Sodales ut eu sem integer vitae justo eget. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Arcu odio ut sem nulla. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Varius morbi enim nunc faucibus a pellentesque sit amet. Pharetra convallis posuere morbi leo urna. Quis vel eros donec ac. Scelerisque varius morbi enim nunc faucibus a. Potenti nullam ac tortor vitae purus. Bibendum neque egestas congue quisque egestas diam. Placerat in egestas erat imperdiet. Adipiscing diam donec adipiscing tristique risus nec feugiat.
        </p> 
        <p>
          Ut sem nulla pharetra diam sit amet nisl. Eu non diam phasellus vestibulum lorem. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Lacinia quis vel eros donec ac odio tempor. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Ac auctor augue mauris augue neque gravida in. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus id interdum velit laoreet id donec ultrices. Volutpat ac tincidunt vitae semper quis lectus nulla. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Sit amet nisl purus in mollis nunc sed id. Sociis natoque penatibus et magnis dis. Maecenas sed enim ut sem viverra. Aliquam sem et tortor consequat id porta nibh.
        </p>
        <img src="/droidworks170400137.jpg" />
        
        <p>
          Blandit massa enim nec dui. Turpis massa sed elementum tempus egestas sed sed risus. Arcu ac tortor dignissim convallis aenean. Amet nisl suscipit adipiscing bibendum est. Vel eros donec ac odio tempor orci. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Blandit massa enim nec dui nunc. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Fames ac turpis egestas maecenas pharetra. A arcu cursus vitae congue mauris. Quam nulla porttitor massa id neque. Quis lectus nulla at volutpat diam ut venenatis tellus. Enim diam vulputate ut pharetra sit. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Eget sit amet tellus cras adipiscing. Aliquam nulla facilisi cras fermentum odio eu feugiat.
        </p>
        <p>
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Cursus euismod quis viverra nibh cras. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. In hac habitasse platea dictumst. Non curabitur gravida arcu ac tortor dignissim. Nibh sit amet commodo nulla facilisi. A scelerisque purus semper eget duis. Convallis convallis tellus id interdum velit laoreet id donec. Sagittis purus sit amet volutpat. Lectus sit amet est placerat in egestas. Pretium lectus quam id leo. A diam maecenas sed enim ut sem viverra aliquet eget. Dui faucibus in ornare quam viverra. Ultricies tristique nulla aliquet enim tortor at. Ornare arcu odio ut sem nulla pharetra diam sit. Justo donec enim diam vulputate ut pharetra sit amet. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. At varius vel pharetra vel turpis. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum.    
        </p>
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
