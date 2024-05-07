import React, { useState, useEffect } from 'react';

const Data = () => {
  const [enrollments, setEnrollments] = useState(1900);
  const [staffCount, setStaffCount] = useState(80);
  const [activitiesCount, setActivitiesCount] = useState(70);
  const [ptfaMembersCount, setPtfaMembersCount] = useState(90);

  useEffect(() => {
    const incrementValues = {
      enrollments: 2000,
      staffCount: 90,
      activitiesCount: 80,
      ptfaMembersCount: 100
    };

    const interval = setInterval(() => {
      if (enrollments < incrementValues.enrollments) {
        setEnrollments(prevEnrollments => prevEnrollments + 10);
      }
      if (staffCount < incrementValues.staffCount) {
        setStaffCount(prevStaffCount => prevStaffCount + 1);
      }
      if (activitiesCount < incrementValues.activitiesCount) {
        setActivitiesCount(prevActivitiesCount => prevActivitiesCount + 1);
      }
      if (ptfaMembersCount < incrementValues.ptfaMembersCount) {
        setPtfaMembersCount(prevPtfaMembersCount => prevPtfaMembersCount + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [enrollments, staffCount, activitiesCount, ptfaMembersCount]); // Include state variables in the dependency array

  return (
    <div className='container mt-5 rounder'>
      <h2 className='text-center p-4 fw-bolder '>Study International School at a Glance</h2>
      <div className="row mt-5 fw-bolder">
        <div className="col-md-3">
          <h1 className='text-danger'>{enrollments}</h1>
          <h4>Current Enrollments</h4>
        </div>
        <div className="col-md-3">
          <h1 className='text-danger'>{staffCount}</h1>
          <h4>Qualified Staff</h4>
        </div>
        <div className="col-md-3">
          <h1 className='text-danger'>{activitiesCount}</h1>
          <h4>Clubs and Activities</h4>
        </div>
        <div className="col-md-3">
          <h1 className='text-danger'>{ptfaMembersCount}</h1>
          <h4>Active PTFA Members</h4>
        </div>
      </div>
    </div>
  );
}

export default Data;
