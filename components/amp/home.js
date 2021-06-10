import Head from "next/head";

const AmpHomeComponent = () => {
  return (
    <>
      <Head>
        <title>Testing AMP Next.js</title>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
      </Head>

      <amp-story
        standalone=""
        title="Stories in AMP - Hello World"
        publisher="AMP Project"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src="https://amp.dev/static/samples/img/story_dog2_portrait.jpg"
        poster-square-src="https://amp.dev/static/samples/img/story_dog2_square.jpg"
        poster-landscape-src="https://amp.dev/static/samples/img/story_dog2_landscape.jpg"
      >
        <amp-story-page id="page-1">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://wallpaperaccess.com/full/4589134.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Bulbasur</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="page-1">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://wallpapercave.com/wp/wp4417433.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Best Team Ever</h1>
          </amp-story-grid-layer>
        </amp-story-page>

        <amp-story-page id="animation-demo">
          <amp-story-grid-layer template="fill">
            <amp-img
              src="https://wallpaperaccess.com/full/377295.jpg"
              animate-in="fly-in-top"
              width="720"
              height="1280"
              layout="responsive"
            ></amp-img>
          </amp-story-grid-layer>
          <amp-story-grid-layer template="vertical">
            <h1>Pikachu</h1>
          </amp-story-grid-layer>
        </amp-story-page>
      </amp-story>
    </>
  );
};

export default AmpHomeComponent;
