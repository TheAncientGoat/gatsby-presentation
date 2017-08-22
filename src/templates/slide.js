import React from 'react'

const SlideRoute = (props) => {//{data: { markDownRemark }}) => {
console.warn(props)
return (
    <div
        dangerouslySetInnerHTML={
            { __html: props.data.markdownRemark.html }}
    />
)
}
export default SlideRoute

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
        siteMetadata {
            title
        }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
