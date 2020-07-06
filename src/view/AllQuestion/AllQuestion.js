import React, { Component } from "react";

export default function AllQuestion(par) {
  return (
    <div className="card mt-5 text-dark bg-info">
      <div className="card-header">
        <h2>{par.text}</h2>
      </div>
      <div clasclassNames="card-body">
        <blockquote className="blockquote mb-0">
          <div className="text-white bg-dark">
            <h3>
              <p>{par.answer}</p>
            </h3>
          </div>
          <div className="text-white">
            <footer>
              <h6>ID: {par.id_question}</h6>
            </footer>
          </div>
        </blockquote>
      </div>
    </div>
  );
}
