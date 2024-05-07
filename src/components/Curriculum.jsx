import React from 'react'
import Card from './Card'
import education from '../images/education.webp';
import art from '../images/arts.webp';
import humanities from '../images/humanities.webp';
import dm from '../images/digital.jpeg';
import web from '../images/webd.jpeg';
import graphic from '../images/graphic.jpeg';
const Curriculum = () => {
  return (
   <>
   <div className="container curriculum">
    <div className="row mt-5 mb-5 ">
        <div className="col-md-6 ">
        <h1 className='fw-bolder'>Curriculum <br/> Overview</h1>
        </div>
        <div className="col-md-6">
        <p>
            The Champion School aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activates to prepare them for the best social culture life
        </p>
        </div>

    </div>

    <div className="row curiculum2 pb-4 ">
            <div className="col-md-4 mb-4">
                <Card img={education}
                 title={'Educational Assesment'} text={' Educational assessment is a vital component of the educational process, serving as a means to evaluate students knowledge, skills and understanding'}/>
            </div>
            <div className="col-md-4 mb-4">
                <Card img={art}
                title={'Fine Arts'} 
                text={'Fine arts encompass a broad spectrum of creative expressions, including painting, sculpture, music, dance, and more. '} />
            </div>
            <div className="col-md-4 mb-4">
                <Card img={humanities}
                title={'Humanities'}
                text={'Humanities delve into the study of human culture, history, literature, philosophy, and the arts, providing insights '}/>
            </div>
            <div className="col-md-4 mb-4">
                <Card img={dm}
             title={'Digital Marketing'}
             text={'Digital marketing leverages online platforms and technologies to promote brands, products, and services, targeting specific audiences.'}/>
            </div>
            <div className="col-md-4 mb-4">
                <Card img={web}
            title={'Web Development'} text={'Web development involves the creation and maintenance of websites and web applications, utilizing various programming languages. '
            } />
            </div>
            <div className="col-md-4 mb-4">
                <Card img={graphic}
            title={'Graphic Designing'} text={'Graphic design is the art of visual communication, combining typography, imagery, and layout to convey messages effectively and aesthetically. '}/>
            </div>
        </div>
    
   </div>
   
   </>
  )
}

export default Curriculum