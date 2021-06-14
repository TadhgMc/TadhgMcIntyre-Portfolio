import React from 'react';

function Project ({title, liveUrl, gitUrl, img}) {
    
    return (
        <div className="card col-lg-2 col-sm-10 m-4 bg-redish txt-darkish fs-5 w-25">
        <img src={img} className="card-img-top m-1" alt={title} />
        <div className="card-body">
          <a className="card-title" href={liveUrl} target="_blank">{title}</a>
          <a href={gitUrl} target="_blank" className="btn btn-dark">See On GitHub</a>
        </div>
      </div>
    )
};

export default Project;