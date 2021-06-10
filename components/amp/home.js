const AmpHomeComponent = () => {
  return (
    <>
      <div className="container">
        <button className="button">
          I Can't use next power here, AMP is good for Blog, FAQ, Content or
          About page
        </button>
      </div>
      <style jsx>
        {`
          .button {
            background: #52b69a;
            border: 3px solid yellow;
            padding: 10px 20px;
            min-width: 190px;
            color: yellow;
            font-weight: bold;
            font-size: 20px;
            border-radius: 10px;
            text-transform: capitalize;
          }

          .button:hover {
            opacity: 0.8;
            cursor: pointer;
          }

          .container {
            background: #52b69a;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: url("/images/home.png") no-repeat;
            background-size: cover;
            background-position: center center;
          }
        `}
      </style>
    </>
  );
};

export default AmpHomeComponent;
