import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Unav from './Unav';

const Status = () => {

    const [admdata, setadmdata] = useState(null);
    const [enrdata, setenrdata] = useState(null);

    const userData = JSON.parse(sessionStorage.getItem('userData'));
    useEffect(() => {
        const id = userData.id;

        const fetchit = async (id) => {
            try {
                const res = await axios.post(`http://127.0.0.1:8000/api/stausadmission/${id}`);
                const data = res.data;
                console.log(data);
                if (data.status === 1) {
                    setadmdata(data.data);
                } else if (data.status === 2) {
                    setenrdata(data.data);
                } else {
                    alert('Sorry, Your Admission has been Rejected');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchit(id);
    }, []);

    return (
        <>
           <header>
    <h1>Welcome to Your Page {userData.name} Email: {userData.email} </h1>
  </header>
        <div className="row container">
            <div className="col-md-3">
                <Unav/>
            </div>
            <div className="col-md-9">
            <div className="container mt-5">
            {admdata && (
                <div className="mb-4">
                    <h2 className="mb-3">Admission Status</h2>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Field Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(admdata).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {enrdata && (
                <div>
                    <h2>Your request is Still Pending</h2>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Field Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(enrdata).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
            </div>
        </div>
        </>
       
    );
};

export default Status;
