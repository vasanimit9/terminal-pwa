import React, { useEffect, useState } from 'react';

import styles from './App.module.css';
import CommandPrompt from './components/CommandPrompt';
import Output from './components/Output';

function App() {

  const user = 'vasanimit9';

  // states
  const [lastCommand, updateLastCommand] = useState('~');
  const [repos, updateRepos] = useState([]);
  const [mitASCII, updateMitASCII] = useState();
  const [hallowsASCII, updateHallowsASCII] = useState();

  // effect
  useEffect(() => {
    fetch('https://vasanimit9.pythonanywhere.com/static/repos.json?t='
        + parseInt(Date.now() / 600000))
      .then(res => res.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < i; j++) {
            if (data[i].updated_at > data[j].updated_at) {
              let swap = data[i];
              data[i] = data[j];
              data[j] = swap;
            }
          }
        }
        return data;
      })
      .then(data => updateRepos(data))
      .catch(e => console.error(e));
  }, []);
  useEffect(() => {
    fetch('/mit_ascii.txt')
      .then(res => res.text())
      .then(data => updateMitASCII(data))
      .catch(e => console.error(e));
  }, []);
  useEffect(() => {
    fetch('/hallows_ascii.txt')
      .then(res => res.text())
      .then(data => updateHallowsASCII(data))
      .catch(e => console.error(e));
  }, []);

  // handler
  const issueCommand = (command) => {
    if (command === 'home' || command === '') {
      updateLastCommand('~');
    }
    else {
      updateLastCommand(command.toLowerCase());
    }
  }

  return (
    <div className={styles.App}>
      <Output command={lastCommand}
        repos={repos}
        mitASCII={mitASCII}
        hallowsASCII={hallowsASCII} />
      <CommandPrompt
        user={user}
        lastCommand={lastCommand}
        onEnterPress={(command) => issueCommand(command)}
      />
    </div>
  );

}

export default App;
