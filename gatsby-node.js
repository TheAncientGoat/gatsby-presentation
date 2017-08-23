const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const select = require(`unist-util-select`)
const precache = require(`sw-precache`)
const gsf = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []

    const slide = path.resolve("src/templates/slide.js")
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000,
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
        console.log(result)
      if (result.errors) {
        console.log(result.errors)
        resolve()
        // reject(result.errors);
      }

      // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges,
               edge => {
                   createPage({
                       path: edge.node.fields.slug, // required
                       component: slide,
          context: {
            slug: edge.node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

//exports.postBuild = require('./post-build')

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        const slug = gsf.createFilePath({ node, getNode, basePath: `pages` })
        console.log(slug)
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
        console.log(node)
    }
}
