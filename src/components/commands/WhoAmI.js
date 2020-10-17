import React, { Fragment } from 'react';

const WhoAmI = (props) => {

  return (
    <Fragment>
      <pre>{props.mitASCII}</pre>
      <div>
        Hi, I'm Mit Vasani.<br />
        An enthusiastic and passionate web developer and freelancer.
        Technologies I have worked with are:
        <ul>
          <li>HTML5, CSS3, Vanilla JS</li>
          <li>Bootstrap, MDBootstrap, Halfmoon, Materialize</li>
          <li>Less</li>
          <li>React</li>
          <li>PWAs</li>
          <li>Python</li>
          <li>Flask</li>
          <li>BeautifulSoup</li>
          <li>Python-Selenium</li>
          <li>PHP</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default WhoAmI;
