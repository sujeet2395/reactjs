import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = ()=>{
    const {empid}=useParams();
    const [empdata, empdatachange]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid)
        .then((res)=>res.json())
        .then(resp=>empdatachange(resp))
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (
        <div>
            <div className="card">
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body" style={{"textAlign":"left"}}>
                    <h2>The Employee name is : {empdata.name} ({empdata.id})</h2>
                    <h3>Contact Details</h3>
                    <h5>Email is : {empdata.email}</h5>
                    <h5>Phone is : {empdata.phone}</h5>
                    <Link className="btn btn-danger" to="/">Back To Listing</Link>
                </div>
            </div>
        </div>
    );
}

export default EmpDetail;