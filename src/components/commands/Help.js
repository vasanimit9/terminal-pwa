import React from 'react';

const Help = () => {
  return (
    <div>
      The following general case-insensitive commands are available:
      <ul>
        <li>
          who: to know more about me
        </li>
        <li>
          projects: to know what projects I have worked on
        </li>
        <li>
          install: to install this PWA if supported by your browser
        </li>
        <li>
          linkedin: you'll be taken to my LinkedIn page
        </li>
        <li>
          github: you'll be taken to my GitHub profile
        </li>
        <li>
          license
        </li>
      </ul>
      However, these are not the only commands that are recognized.
      There are some easter eggs for you to find out (try the "valar morghulis" command or the "hallows" command). ;)
      <br />
      [Note: This is displayed because you are on the homepage, you used the 'help' command,
      or you used a command that wasn't recognized.]
    </div>
  );
};

export default Help;
