module.exports = {
    pathPrefix: `/gatsby-presentation`,
    siteMetadata: {
        title: `An intro to Gatsby`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
    ],
}
