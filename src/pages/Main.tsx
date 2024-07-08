import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <main className="image-1-parent">
        <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        <img className="vector-icon" alt="" src="/vector.svg" />
        <img className="vector-icon1" alt="" src="/vector-1.svg" />
        <img className="vector-icon2" alt="" src="/vector-2.svg" />
        <img className="vector-icon3" alt="" src="/vector-3.svg" />
        <header className="vector-parent">
          <img className="vector-icon4" alt="" src="/vector-4.svg" />
          <img
            className="logogo-1-icon"
            loading="lazy"
            alt=""
            src="/logogo-1@2x.png"
          />
        </header>
      </main>
      <div className="main-inner">
        <div className="references-parent">
          <div className="references">
            <a className="home">Home</a>
          </div>
          <div className="learn-more-parent">
            <div className="learn-more">
              <div className="learn-more-button">
                <div className="learn-more-button-child" />
              </div>
              <div className="learn-more1">Learn More</div>
              <div className="learn-more-inner">
                <img className="frame-child" alt="" src="/polygon-1.svg" />
              </div>
            </div>
            <div className="risk-factors-wrapper">
              <a className="risk-factors">Risk Factors</a>
            </div>
          </div>
          <div className="references1">
            <a className="references2">References</a>
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="welcome-to-sexual-self-wrapper">
          <h2 className="welcome-to-sexual">Welcome to Sexual Self</h2>
        </div>
        <div className="frame-group">
          <div className="frame-wrapper">
            <div className="frame-container">
              <div className="sexual-self-is-a-human-sexuali-wrapper">
                <div className="sexual-self-is">{`Sexual Self is a Human Sexuality such as diversity of `}</div>
              </div>
              <div className="sexual-behaviourunderstanding-wrapper">
                <div className="sexual-behaviourunderstanding">{`sexual behaviour,understanding the human sexual response, `}</div>
              </div>
              <div className="identifying-sexual-orientation">{`identifying sexual orientations  and differentiating love from lust. Human  `}</div>
            </div>
          </div>
          <div className="sexuality-is-influenced-by-phy-wrapper">
            <div className="sexuality-is-influenced">{`Sexuality is influenced by physical, psychological, spiritual, and cultural factor. `}</div>
          </div>
          <div className="as-sexual-beings-container">
            <p className="as-sexual-beings">
              As sexual beings, people are identified by gender, role,
              assignment, and perception.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
