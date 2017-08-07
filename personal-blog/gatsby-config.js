module.exports = {
  siteMetadata: {
    title: `David Koller - Blog`,
    author: `David Koller`,
  },
      plugins: [
      'gatsby-plugin-catch-links',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [] // just in case those previously mentioned remark plugins sound cool :)
        }
      },
    ]
  };