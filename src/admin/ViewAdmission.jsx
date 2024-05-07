import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewAdmission = () => {
    const naviagte=useNavigate();
    const getdata = JSON.parse(sessionStorage.getItem('getadmission'));

    const backit=()=>{
naviagte('/admissionlist')
    }
    const printit=()=>{
window.print();
    }

    return (
        <>
            <div className='print d-flex'>
                <table className=" mt-5 table table-bordered">
               

                    <tbody>

                    <tr>
        <td>Course ID</td>
        <td>{getdata.data.cid}</td>
    </tr>

    <tr>
        <td>User Id</td>
        <td>{getdata.data.uid}</td>
    </tr>

    <tr>
        <td>User Name</td>
        <td>{getdata.data.uname}</td>
    </tr>

    <tr>
        <td>Email</td>
        <td>{getdata.data.uemail}</td>
    </tr>

    <tr>
        <td>Course Name</td>
        <td>{getdata.data.cname}</td>
    </tr>
    <tr>
        <td>Teacher Name</td>
        <td>{getdata.data.cteach}</td>
    </tr>
    <tr>
        <td>Duration</td>
        <td>{getdata.data.cleng}</td>
    </tr>
    <tr>
        <td>Course Fee</td>
        <td>{getdata.data.camount}</td>
    </tr>

                    </tbody>
                </table>
     
            </div>
            <div className="text-center mt-2">
      <form action="" class="d-print-none d-inline">
        <input type="submit" value="Print" class="btn btn-danger" onClick={printit} /> 
        <input type="submit" value="Back" class="btn btn-danger" onClick={backit} /> 
</form>

      </div>
        </>
    );
};

export default ViewAdmission;