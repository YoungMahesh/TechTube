require('dotenv').config() // required by "gatsby" & NOT  required for "zeit-hosting"

/*---------ENVIRONMENT VARIABLES------------------------
 .env file -> for local development -> yarn develop
 now.json file -> for build during hosting -> now
*/

module.exports = {
  siteMetadata: {
    title: "Tech-Tube",
    description: "A collection of tech-playlists",
    author: "@youngmahesh",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG",
        name: "CssGrid",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb",
        name: "Algorithms",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLWKjhJtqVAbmfoj2Th9fvxhHIeqFO7wOy",
        name: "CsBasics",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLnhBKTWCbQKQYBOMx_PVA3VnLf8_YoZkg",
        name: "Philosophy",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLnhBKTWCbQKSVi_h47y4b-0KlW4Y5LExR",
        name: "TechTalks",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        API_KEY: process.env.YOUTUBE_DATA_API,
        kind: "playlistItems",
        id: "PLnhBKTWCbQKSHk6vZZQYCei8o1xjvgHRF",
        name: "Songs",
      },
    },
  ],
}

