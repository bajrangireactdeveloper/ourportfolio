import React from "react";

export default function Services(props) {
  return (
    <>
      <div className="col-lg-4 mt-3">
        <div class="card text-center">
        <div class="card-header text-primary fw-bold">{props.Project_tile}</div>
          <div class="card-body">
            <h5 class="card-title py-3 text-dark fw-bold">{props.Project_desc}</h5>
          
            <a href={props.Project_url} class="btn btn-primary">
              Visit Website 
            </a>
          </div>
          
        </div>
      </div>
    </>
  );
}
