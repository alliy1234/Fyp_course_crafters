import React,{useState} from 'react'
import axios from 'axios';

const AddCourse = () => {
  
    const [courseData, setCourseData] = useState({
        cname: '',
        cdesc: '',
        cleng: '',
        cteach:'',
        ctime: '',
        camount: '',
        cstart: '',
        cend: '',
        cseat:'',
        image: null // Add courseImage to state
      });
    
      const handleChange = (e) => {
    
        const { name, value } = e.target;
        setCourseData({
          ...courseData,
          [name]: value
        });
      };

      
  const handleImageChange = (e) => {
    setCourseData({
      ...courseData,
      image: e.target.files[0]
    });
  };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('cname', courseData.cname);
        formData.append('cdesc', courseData.cdesc);
        formData.append('cleng', courseData.cleng);
        formData.append('cteach', courseData.cteach);
        formData.append('ctime', courseData.ctime);
        formData.append('camount', courseData.camount);
        formData.append('cstart', courseData.cstart);
        formData.append('cend', courseData.cend);
        formData.append('cseat', courseData.cseat);
        formData.append('image', courseData.image); // Append the image
    
        axios.post('http://127.0.0.1:8000/api/course', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            if(response.data.status=='200'){
              alert('Course Added Successfully');
             window.location.href='Courses.jsx';

            }
          })
          .catch(error => {
            alert('Error Occured');
            console.error(error);
          });
      };
    
      return (
        <div className='container'>
<form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              className="form-control"
              name="cname"
              value={courseData.cname}
              onChange={handleChange}
              placeholder="Enter course name"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              name="cdesc"
              value={courseData.cdesc}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <label>Course Length</label>
            <input
              type="text"
              className="form-control"
              name="cleng"
              value={courseData.cleng}
              onChange={handleChange}
              placeholder="Enter course length"
            />
          </div>
          <div className="form-group">
            <label>Teacher Name</label>
            <input
              className="form-control"
              name="cteach"
              value={courseData.cteach}
              onChange={handleChange}
              placeholder="Enter Teacher name"
            />
          </div>
          <div className="form-group">
            <label>Course Timing</label>
            <input
              type="text"
              className="form-control"
              name="ctime"
              value={courseData.ctime}
              onChange={handleChange}
              placeholder="Enter course timing"
            />
          </div>
          <div className="form-group">
            <label>Course Amount</label>
            <input
              type="text"
              className="form-control"
              name="camount"
              value={courseData.camount}
              onChange={handleChange}
              placeholder="Enter course amount"
            />
          </div>
          <div className="form-group">
            <label>Course Starting Date</label>
            <input
              type="date"
              className="form-control"
              name="cstart"
              value={courseData.cstart}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Course Ending Date</label>
            <input
              type="date"
              className="form-control"
              name="cend"
              value={courseData.cend}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Total Seats</label>
            <input
              type="text"
              className="form-control"
              name="cseat"
              value={courseData.cseat}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
        <label>Course Image</label>
        <input
          type="file"
          className="form-control-file"
          name="image"
          onChange={handleImageChange}
        />
      </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      );
        
}

export default AddCourse