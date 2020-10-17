import React, { Fragment, useState } from 'react';

const Projects = (props) => {

  const convertMSToTimeDelta = (ms) => {
    const s = parseInt(ms / 1000);
    const date = { y: null, m: null, d: null, h: null };
    date.h = parseInt(s / 3600);
    date.d = parseInt(date.h / 24);
    date.m = parseInt(date.d / 30);
    date.y = parseInt(date.m / 12);
    if (date.y) {
      return date.y + 'y';
    }
    else if (date.m) {
      return date.m + 'm';
    }
    else if (date.d) {
      return date.d + 'd';
    }
    else {
      return date.h + 'h';
    }
  };

  // state
  const [repos] = useState(props.repos);

  return (
    <span>
      {repos.map((repo, index) => (
        <Fragment key={index}>
          Name: {repo.name}<br />
          Description: {repo.description}<br />
          GitHub: <a
            href={repo.html_url}
            alt='repo link'
            target='_blank'
            rel='noopener noreferrer'>
              link
            </a><br />
          {
            repo.homepage ?
              (
                <Fragment>
                  Homepage:&nbsp;
                  <a href={repo.homepage}
                    alt='homepage' target='_blank'
                    rel='noopener noreferrer'>
                      link
                  </a><br />
                </Fragment>
              ) :
              null
          }
          Last updated: {convertMSToTimeDelta(Date.now() - Date.parse(repo.updated_at))} ago
          &nbsp;<br />&nbsp;<br />
        </Fragment>
      ))}
    </span>
  );
}

export default Projects;
