import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import ImgComputer from "./assets/images/image-computer.png";
import ImgDevices from "./assets/images/image-devices.png";
import IconBlacklist from "./assets/images/icon-blacklist.svg";
import IconText from "./assets/images/icon-text.svg";
import IconPreview from "./assets/images/icon-preview.svg";

/* images clients */
import LogoGoogle from "./assets/images/logo-google.png";
import LogoIBM from "./assets/images/logo-ibm.png";
import LogoMicrosoft from "./assets/images/logo-microsoft.png";
import LogoHP from "./assets/images/logo-hp.png";
import LogoVectorGraphics from "./assets/images/logo-vector-graphics.png";

/* images social */
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Instagram from "./assets/images/icon-instagram.svg";

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} alt="header logo img"></img>
        <div>
          <h1 className="text--header">A history of everything you copy</h1>
          <p className="text--body">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
        </div>
        <div className="button-container">
          <button className="button--ios">Download for iOS</button>
          <button className="button--mac">Download for Mac</button>
        </div>
      </header>

      <main className="main">
        <article className="feature feature1">
          <hgroup className="feature1__header">
            <h2 className="text--header">Keep track of your snippets</h2>
            <div className="text--body">
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </div>
          </hgroup>
          <div className="feature1__content-container">
            <img
              className="feature1__img"
              src={ImgComputer}
              alt="img computer"
            ></img>
            <div className="feature1__feature-list">
              <hgroup className="feature1__feature">
                <h3 className="text--header">Quick Search</h3>
                <div className="text--body">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </div>
              </hgroup>
              <hgroup className="feature1__feature">
                <h3 className="text--header">iCloud Sync</h3>
                <div className="text--body">
                  Instantly saves and syncs snippets across all your devices.
                </div>
              </hgroup>
              <hgroup className="feature1__feature">
                <h3 className="text--header">Complete History</h3>
                <div className="text--body">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </div>
              </hgroup>
            </div>
          </div>
        </article>

        <article className="feature feature2">
          <hgroup className="feature2__header">
            <h2 className="text--header">Access Clipboard anywhere</h2>
            <div className="text--body">
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </div>
          </hgroup>
          <img
            className="feature2__img"
            src={ImgDevices}
            alt="img of devices"
          ></img>
        </article>

        <article className="feature feature3">
          <hgroup>
            <h2 className="text--header">Supercharge your workflow</h2>
            <div className="text--body">
              We've got the tools to boost your productivity.
            </div>
          </hgroup>
          <div className="feature3__content-container">
            <div className="feature3__feature">
              <img src={IconBlacklist} alt="icon blacklist"></img>
              <hgroup>
                <h3 className="text--header">Create blacklists</h3>
                <div className="text--body">
                  Ensure sensitive information never makes its way to your
                  clipboard by excluding certain sources.
                </div>
              </hgroup>
            </div>
            <div className="feature3__feature">
              <img src={IconText} alt="icon text"></img>
              <hgroup>
                <h3 className="text--header">Plain text snippets</h3>
                <div className="text--body">
                  Remove unwanted formatting from copied text for a consistent
                  look.
                </div>
              </hgroup>
            </div>
            <div className="feature3__feature">
              <img src={IconPreview} alt="icon preview"></img>
              <hgroup>
                <h3 className="text--header">Sneak preview</h3>
                <div className="text--body">
                  Quick preview of all snippets on your Clipboard for easy
                  access.
                </div>
              </hgroup>
            </div>
          </div>
        </article>

        <article className="clients">
          <img className="client_img" src={LogoGoogle} alt="google logo"></img>
          <img className="client_img" src={LogoIBM} alt="ibm logo"></img>
          <img
            className="client_img"
            src={LogoMicrosoft}
            alt="microsoft logo"
          ></img>
          <img className="client_img" src={LogoHP} alt="hp logo"></img>
          <img
            className="client_img"
            src={LogoVectorGraphics}
            alt="vector graphics logo"
          ></img>
        </article>

        <article className="feature downloads">
          <hgroup>
            <h2 className="text--header">Clipboard for iOS and Mac OS</h2>
            <div className="text--body">
              Available for free on the App Store. Download for Mac or iOS, sync
              with iCloud and you’re ready to start adding to your clipboard.
            </div>
          </hgroup>
          <div className="button-container">
            <button className="button--ios">Download for iOS</button>
            <button className="button--mac">Download for Mac</button>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="footer__content-container">
          <div className="footer__left-container">
            <img className="footer__logo" src={Logo} alt="footer logo"></img>
            <div className="footer__nav-item-pair">
              <a className="footer__nav-link">FAQs</a>
              <a className="footer__nav-link">Contact Us</a>
            </div>
            <div className="footer__nav-item-pair">
              <a className="footer__nav-link">Privacy Policy</a>
              <a className="footer__nav-link">Press Kit</a>
            </div>
            <div className="footer__nav-item-pair">
              <a className="footer__nav-link">Install Guide</a>
            </div>
          </div>
          <div className="footer__social-container">
            <img
              className="social__img"
              src={Facebook}
              alt="facebook icon"
            ></img>
            <img className="social__img" src={Twitter} alt="twitter icon"></img>
            <img
              className="social__img"
              src={Instagram}
              alt="instagram icon"
            ></img>
          </div>
        </div>

        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
