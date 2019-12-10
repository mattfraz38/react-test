import React from 'react';

const Work = ({title, thumbnail, works}) => {
  return(
    <div>
    <ol>
      {works.map(work => (
        <li>{work.title}</li>
      ))}
    </ol>
    </div>
  )
}

export default Work;
