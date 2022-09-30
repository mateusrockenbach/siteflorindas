module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
  siteMetadata: {
    title: `Florindas Doceria`,
    description: `Cafeteria completa e Mexicano`,
    siteUrl: `https://www.florindascafe.com.br`,
  },
}