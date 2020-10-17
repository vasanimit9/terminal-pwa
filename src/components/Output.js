import React, { Fragment } from 'react';

import Help from './commands/Help';
import WhoAmI from './commands/WhoAmI';
import Projects from './commands/Projects';

const Output = (props) => {
  
  if(props.command === 'who') {
    return <WhoAmI mitASCII={props.mitASCII} />;
  }
  else if(props.command === 'install') {
    if(window.installPWA && window.installPWA()) {
      return <div>You should be prompted for installation.</div>;
    }
    else {
      return <div>Already installed or can't be installed.</div>
    }
  }
  else if(props.command === 'projects') {
    return <Projects repos={props.repos} />;
  }
  else if(props.command === 'address') {
    return (
      <span>221B Baker Street</span>
    );
  }
  else if(props.command === 'valar morghulis') {
    return (
      <span>valar dohaeris</span>
    );
  }
  else if(props.command === 'scratch') {
    return (
      <span>'Tis but a scratch!</span>
    );
  }
  else if(props.command === 'alchemy') {
    return (
      <span>
        Alchemy, It is the scientific technique of understanding the structure of matter, decomposing it, and then reconstructing it.
        If performed skillfully, it is even possible to create gold out of lead.
        However, as it is a science, there are some natural principles in place.
        Only one thing can be created from something else of a certain mass.
        This is the Principle of Equivalent Exchange. 
      </span>
    );
  }
  else if(props.command === 'py zen') {
    return (
      <Fragment>
        &gt;&gt;&gt; import this<br />
        The Zen of Python, by Tim Peters<br />
        &nbsp;<br />
        Beautiful is better than ugly.<br />
        Explicit is better than implicit.<br />
        Simple is better than complex.<br />
        Complex is better than complicated.<br />
        Flat is better than nested.<br />
        Sparse is better than dense.<br />
        Readability counts.<br />
        Special cases aren't special enough to break the rules.<br />
        Although practicality beats purity.<br />
        Errors should never pass silently.<br />
        Unless explicitly silenced.<br />
        In the face of ambiguity, refuse the temptation to guess.<br />
        There should be one-- and preferably only one --obvious way to do it.<br />
        Although that way may not be obvious at first unless you're Dutch.<br />
        Now is better than never.<br />
        Although never is often better than *right* now.<br />
        If the implementation is hard to explain, it's a bad idea.<br />
        If the implementation is easy to explain, it may be a good idea.<br />
        Namespaces are one honking great idea -- let's do more of those!
      </Fragment>
    );
  }
  else if(props.command === 'linkedin') {
    window.location = 'https://www.linkedin.com/in/mit-vasani-8321a2138/';
    return (
      <span>
        You should be taken to my LinkedIn page in a moment.
      </span>
    );
  }
  else if(props.command === 'github') {
    window.location = 'https://github.com/vasanimit9';
    return (
      <span>
        You should be taken to my github profile in a moment.
      </span>
    );
  }
  else if(props.command === 'hallows') {
    return (
      <pre>{props.hallowsASCII}</pre>
    );
  }
  else if(props.command === 'license') {
    return (
      <Fragment>
        MIT License<br />
        <br />
        Copyright (c) 2020 Mit Vasani<br />
        <br />
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:<br />
        <br />
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.<br />
        <br />
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
      </Fragment>
    );
  }
  else {
    return <Help />;
  }
}

export default Output;
