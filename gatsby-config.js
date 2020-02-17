module.exports = {
  siteMetadata: {
    title: "Tech-Tube",
    description: "A collection of tech-playlists",
    author: "@youngmahesh",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        key: "AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII",
        kind: "playlistItems",
        id: "PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG",
        name: "CssGrid",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        key: "AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII",
        kind: "playlistItems",
        id: "PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb",
        name: "Algorithms",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        key: "AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII",
        kind: "playlistItems",
        id: "PLWKjhJtqVAbmfoj2Th9fvxhHIeqFO7wOy",
        name: "CsBasics",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        key: "AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII",
        kind: "playlistItems",
        id: "PLnhBKTWCbQKQYBOMx_PVA3VnLf8_YoZkg",
        name: "Philosophy",
      },
    },
    {
      resolve: `gastsby-source-youtube-v3`,
      options: {
        key: "AIzaSyD795V8WoL_JXYHqqUgCEgxh783QCXTpII",
        kind: "playlistItems",
        id: "PLnhBKTWCbQKSVi_h47y4b-0KlW4Y5LExR",
        name: "TechTalks",
      },
    },
  ],
}
//
