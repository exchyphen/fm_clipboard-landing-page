import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";

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
        <div className="header__button-container">
          <button className="button--ios">Download for iOS</button>
          <button className="button--mac">Download for Mac</button>
        </div>
      </header>

      <main className="main"></main>

      <footer>
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
