import Head from "next/head";

export default () => (
  <div>
    <Head>
      <!-- Primary Meta Tags -->
<title>UX Writing en español.</title>
<meta name="title" content="UX Writing en español.">
<meta name="description" content="Por Caro Raspa y Sol Parnofiello. Primera comunidad hispana de escritores de producto digitales. ">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://metatags.io/">
<meta property="og:title" content="UX Writing en español.">
<meta property="og:description" content="Por Caro Raspa y Sol Parnofiello. Primera comunidad hispana de escritores de producto digitales. ">
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="UX Writing en español.">
<meta property="twitter:description" content="Por Caro Raspa y Sol Parnofiello. Primera comunidad hispana de escritores de producto digitales. ">
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">

      <meta http-equiv="Content-Language" content="es" />
      <meta
        name="keywords"
        content="uxwriting, ux writing en español, argentina"
      />
    </Head>
    <div className="links">
      <a
        href="https://www.linkedin.com/company/ux-writing-en-español"
        target="_blank"
        className="animated swing"
      >
        <img src="/static/logos/lnkd.png" />
      </a>
      <a
        href="https://www.instagram.com/uxwritinges"
        target="_blank"
        className="animated swing"
      >
        <img src="/static/logos/ig.png" />
      </a>
      <a
        href="https://medium.com/ux-writing-en-espanol"
        target="_blank"
        className="animated swing"
      >
        <img src="/static/logos/medium.png" />
      </a>
      <a
        href="https://open.spotify.com/show/5fcpIYfbLA984haw5MicR1"
        target="_blank"
        className="animated swing"
      >
        <img src="/static/logos/spotify.png" />
      </a>
    </div>

    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background-color: #b1e5d5;
        color: #fafafa;
        font-size: 22px;
      }

      .links {
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        width: 100%;
      }

      a {
        color: #ddd;
        text-decoration: none;
        font-family: "Bungee", cursive;
        margin: 12px;
        transition: all 0.2s;
      }
      a:hover {
      }

      img {
        height: 50px;
      }
    `}</style>
  </div>
);
