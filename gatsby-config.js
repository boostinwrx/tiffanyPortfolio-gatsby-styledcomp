module.exports = {
  siteMetadata: {
    title: `Tiffany Codes`,
    description: `A developer portfolio for Tiffany Abraham. Made by Gatsby w/ styled components starter`,
    starter_author: `@blakenoll`,
    author: `@tiffanyabraham`,
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./data/images`,
      },
    },
      `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./data/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Tiffany Portfolio`,
        path: `./data`
      }

    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}

