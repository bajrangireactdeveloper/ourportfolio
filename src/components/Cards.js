import React from 'react';

function Cards(props) {
  return (
    <div className="col-lg-4 mt-3">
    <div className="card">
        <img src={props.imgpath} className={props.classNameTxt} alt="..."/>
        <div className="card-body">
            <h5 className="card-title text-center text-dark fw-bold">{props.cardTitlename}</h5>
            <p className="card-text">{props.cardTxt}</p>
            <a href="#" className="btn btn-primary">Read More</a>
        </div>
    </div>
</div>
  )
}

export default Cards
