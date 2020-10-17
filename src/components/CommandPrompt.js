import React, { useEffect, useRef, useState } from 'react';

import styles from './CommandPrompt.module.css';

const CommandPrompt = (props) => {

  // refs
  const commandInputRef = useRef();

  // states
  const [commandInput, changeCommandInput] = useState("");

  // effects
  useEffect(() => {
    commandInputRef.current.addEventListener('keyup', (event) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        if (commandInput !== '' && commandInput.trim().toLowerCase() !== 'home') {
          props.onEnterPress(commandInput.trim());
        }
        else {
          props.onEnterPress('~')
        }
        changeCommandInput('');
      }
    });
    commandInputRef.current.focus();
    document.querySelector('*').addEventListener('click', (event) => {
      if(!(event.target.getAttribute('href'))) {
        commandInputRef.current.focus();
      }
    });
  }, [props, commandInput]);

  return (
    <div className={styles.CommandPrompt}>
      <span className={styles.User}>{props.user}</span>
      &nbsp;=&gt;&nbsp;cmd:&nbsp;
      <span style={{ color: 'white' }}>
        <span className={styles.LastCommand}>
          {props.lastCommand}
        </span>
        &nbsp;=&gt;&nbsp;
      </span>
      <br />
      <input ref={commandInputRef}
        onChange={event => changeCommandInput(event.target.value)}
        value={commandInput}
        placeholder='command'
        title='command' />
    </div>
  );
}

export default CommandPrompt;
