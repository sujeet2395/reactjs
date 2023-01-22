import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = ()=>{
    const [id, idchange]=useState("");
    const [name, namechange]=useState("");
    const [email, emailchange]=useState("");
    const [phone, phonechange]=useState("");
    const [active, activechange]=useState(true);
    const [validation, valchange]=useState(false);
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={id,name,email,phone,active};

        fetch("http://localhost:8000/employee/"+id,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(empdata)
        })
        .then(res=>{
            alert("Saved Successfully");
            navigate("/");
        }).catch(err=>{
            console.log(err.message);
        })
    }
    const {empid}=useParams();
    
    useEffect(()=>{
        fetch("http://localhost:8000/employee/"+empid)
        .then((res)=>res.json())
        .then(resp=>{
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            activechange(resp.active);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-title">
                            <h2>Employee Edit</h2>
                        </div>
                        <div className="card-body">
                            <div className="row" style={{"textAlign":"left"}}>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled="disabled" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control" />
                                        {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input value={active} onChange={e=>activechange(e.target.checked)} type="checkbox" />
                                        <label className="form-check-label" style={{"marginLeft":"5px"}}>Is Active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default EmpEdit;