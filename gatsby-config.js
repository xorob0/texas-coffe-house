//TODO: PWA adaptation
//TODO: Vector preview for images lazy loading
module.exports = {
  siteMetadata: {
    title: `Texas Coffee House`,
    description: `This website allows you to see the menus for the Texas Coffee House, located in Mons, Belgium. It is also used for the fidelity points.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Texas Coffee House Fidelity",
        short_name: "Texas Cofee House",
        description:
          "The app used to manages your fidelity points at the Texas Coffee House, in Mons, Belgium",
        start_url: "/",
        background_color: `#f7f0eb`,
        theme_color: `#996633`,
        display: `standalone`,
        icon: "src/images/icon.jpg",
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Purple Purse`,
            subsets: [`latin`],
          },
          {
            family: `Lily Script One`,
            subsets: [`latin`],
          },
          {
            family: `Amatic SC`,
            subsets: [`latin`],
          },
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
