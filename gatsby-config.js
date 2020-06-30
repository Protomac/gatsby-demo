/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pandas`,
  },
  plugins: [
    // "@builder.io/gatsby",
    {
      resolve: '@builder.io/gatsby',
      options: {
        /** TODO: update this with your API key! */
        publicAPIKey: '7b4466b2b5f448c791117e99a9e2a10b',
        // to allow editing on local host
        // custom404Dev: path.resolve('src/pages/404.tsx'),
        // templates: {
        //   // Render every `page` model as a new page using the /page.tsx template
        //   // based on the URL provided in Builder.io
        //   page: path.resolve('src/templates/page.tsx')
        // }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}