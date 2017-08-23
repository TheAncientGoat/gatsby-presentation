import React from 'react'

const SlideRoute = ({data: { markdownRemark } = {data: {markdownRemark: {}}}}) => {
return (
    <div
        dangerouslySetInnerHTML={
            { __html: markdownRemark.html }}
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
    }
  }
`
