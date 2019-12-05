const constants = {
  title: "Social Poster Generator",
  desc: "Description of Social Poster Generator"
  // url: process.env.PUBLIC_URL || "http://localhost:4000"
};

const html = ({ imgUrl, title, socialUrl, desc }) => `
<html>
    <head>
        <title>${title}</title>
        <meta name="title" content="${title}">
        <meta name="description" content="${desc}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${socialUrl}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:image" content="${imgUrl}" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary">
        <meta property="twitter:url" content="${socialUrl}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${desc}">
        <meta property="twitter:image" content="${imgUrl}">
    </head>
    <body style="margin:0;">
        <img src="${imgUrl}" alt="social-image" style="width:50rem;max-width:100vw;"/>
    </body>
</html>
`;

module.exports = data => {
  return html({ ...constants, ...data });
};
