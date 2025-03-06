import React from "react";
import "./Card.css"; // CSS dosyanı import etmeyi unutma!

export default function Card({image, cardTitle, description}) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={image} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{description} </p>
        </div>
      </div>
    </div>
  );
}