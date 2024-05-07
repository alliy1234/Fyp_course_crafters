import React from 'react'
import about from '../images/header.webp';
const About = () => {
  return (
    <div className='container about'>
<div className="row">
    <div className="col-md-6">
        <img src={about} className='img-fluid' alt="" />
    </div>
    <div className="col-md-6 mt-5">
        <h2>Welcome to WSchool</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam aliquam laborum, minus esse ipsum ducimus inventore, porro dolore in praesentium nemo delectus nobis amet, minima illo atque cumque? Dicta tempore, eveniet molestias esse perspiciatis similique omnis dolorem, rem, dolorum fugiat aliquid hic nemo minima ratione corporis sed quasi quod adipisci?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum ducimus mollitia ad quasi nihil eius tenetur nisi minus cum vitae!
        </p>
        <a href='' className='btn btn-primary'>Read More</a>
    </div>
</div>
    </div>
  )
}

export default About