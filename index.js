
const rootElement = document.querySelector(".root");

// jsx element header
const header = (
  <header>
    <div className="header-wrapper">
      <h1> Learning React in 30 days </h1>
      <h2> Learning the React for gaining knowledge </h2>
      <h3> Sahil Pawar </h3>
      <p> Ram Patil </p>
      <small> 2 oct 2026 </small>
    </div>
  </header>
);

// jsx element main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <li> HTML </li>
        <li> CSS </li>
        <li> React </li>
      </ul>
    </div>
  </main>
);
// jsx element footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p> Copywrite @ 2026 </p>
    </div>
  </footer>
);
// jsx element, app, container or parent
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, rootElement);
