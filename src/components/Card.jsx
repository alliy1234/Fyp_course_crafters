import React from 'react'

const Card = ({img,title,text}) => {
  return (
    <div>
<div className="card spcard" style={{width: '18rem;'}}>
  <img src={img} className="card-img-top img-fluid  " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    {/* <a href="#" className="btn btn-danger">Go somewhere</a> */}
  </div>
</div>

    </div>
  )
}

export default Card