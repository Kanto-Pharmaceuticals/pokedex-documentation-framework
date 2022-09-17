/* Load the appropriate .env file */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/* Load plugins, keep these as light as possible for better control */
module.exports = {
  siteMetadata: {
    title: `Pokédex Documentation`,
    author: {
      name: `Kanto Pharmaceuticals`,
      summary: `Digital solutions for the betterment of Pokémon.`,
    },
    description: `Documentation on the design, creation, and usage of the Pokédex.`,
    siteUrl: `https://d.pokedex.mattycakes.ca/`,
  },
  plugins: [
    "gatsby-plugin-use-dark-mode",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-typesense`,
      options: {
        rootDir: `${__dirname}/public`, // Required
        collectionSchema: {
          // Required
          name: "documentation",
          fields: [
            {
              name: "page_path",
              type: "string",
              optional: false,
              index: true,
            },
            {
              name: "title",
              type: "string",
              optional: true,
              index: true,
            },
            {
              name: "date",
              type: "string",
              optional: true,
              index: true,
            },
            {
              name: "modified",
              type: "string",
              facet: false,
              optional: true,
              index: true,
            },
            {
              name: "description",
              type: "string",
              facet: false,
              optional: true,
              index: true,
            },
            {
              name: "tags",
              type: "string[]",
              facet: true,
              optional: true,
              index: true,
            },
            {
              name: "main",
              type: "string",
              facet: false,
              optional: true,
              index: true,
            },
            {
              name: "status",
              type: "string",
              facet: false,
              optional: true,
              index: true,
            },
            {
              name: "page_priority_score",
              type: "int32",
              optional: false,
              index: true,
            },
          ],
          default_sorting_field: "page_priority_score", // Required
        },
        server: {
          // Required
          apiKey: process.env.TYPESENSE_API_ADMIN,
          nodes: [
            {
              host: "typesense.mattycakes.ca",
              port: "",
              protocol: "https",
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `documentation`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Pokédex Documentation RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pokédex Documentation`,
        short_name: `d.pokedex`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag, for dark/light mode.
      },
    },
  ],
}
