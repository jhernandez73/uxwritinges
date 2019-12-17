import Head from "next/head";

export default () => (
  <div>
    <Head>
      <title>UX Writing en español 💎 </title>
      <meta content="123" />
      <meta
        name="Description"
        content="Por Caro Raspa y Sol Parnofiello | Primera comunidad de UX writers en español.Primera comunidad de UX writers en español."
      />
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
