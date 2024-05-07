import React from 'react'
import Card from './Card'
import dm from '../images/digital.jpeg';
import web from '../images/webd.jpeg';
import graphic from '../images/graphic.jpeg';
const Courses = () => {
  return (
    <div className='container about'>
    <h2 className='text-center mb-4'>Our Courses</h2>
    <div className="row">
        <div className="col-md-4">
            <Card img={dm}
             title={'Digital Marketing'}/>
        </div>
        <div className="col-md-4">
            <Card img={web}
            title={'Web Development'} />
        </div>
        <div className="col-md-4">
            <Card img={graphic}
            title={'Graphic Designing'}/>
        </div>
    </div>

</div>
  )
}

export default Courses