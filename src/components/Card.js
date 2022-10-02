import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"

function Card({data, handleOpenModal}) {
    return (
        <div className="card">
          <LazyLoadImage 
            className="img" 
            src={data.link}
            alt={`full size view of ${data.prompt}`} 
            title={data.prompt}
            onClick={handleOpenModal}
          />
        </div>
    );
}

export default Card;