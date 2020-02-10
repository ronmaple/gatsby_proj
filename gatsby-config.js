module.exports = {
  siteMetadata: {
    title: `Ron's Blog`,
    description: `Learning blog by a self taught developer`,
    siteUrl: `https://ronblogs.netlify.com`,
    author: `@ronmapue`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ron's blog`,
        short_name: `RonBlog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-remark',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`
  ],
}
