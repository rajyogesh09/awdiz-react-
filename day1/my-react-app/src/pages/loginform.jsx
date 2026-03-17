            import { useState } from "react";
        import "./loginform.css";
            function Loginform() {
                const [formData , setFormData] = useState({name: "",email: "", password: "",confirmpassword: "",role: "user"});
                 const [submittedData , setSubmittedData] = useState (null);
                const handleSubmit = (e) => {
            e.preventDefault();
            setSubmittedData(formData);
            };
            return (
                <>
            <div className="form-container">REGISTRATION FORM  <br/>
                <form  className= "login-form "onSubmit={handleSubmit}> <br/>
                    <label className="form-label">Name</label> <br/>
                    <input className="form-input" onChange={(e)=> setFormData({...formData, name: e.target.value})} required  value={formData.name} placeholder="  enter your full name"/> <br/>
                    <label className="form-label">Email</label> <br/>
                    <input className="form-input"onChange={(e)=>setFormData ({...formData,email: e.target.value})}  value={formData.email} required placeholder="abc@gmail.com"/> <br/>
                    <label className="form-label">Password</label> <br/>
                    <input className="form-input" onChange={(e)=> setFormData ({...formData,password: e.target.value})} value={formData.password} required placeholder="enter your password"/> <br/>
                    <label className="form-label">Confirm Password</label> <br/>
                    <input className="form-input" onChange = {(e)=> setFormData ({...formData,confirmpassword: e.target.value})}value={formData.confirmpassword} required placeholder="confirm your password"/> <br/>
                    <label className="form-label" required>Role</label> <br/>
                    <select value={formData.role} onChange={(e)=>setFormData ({...formData , role: e.target.value})}>
                        <option value="user">User</option>
                        <option value= "admin"> Admin </option>
                    </select > <br/>
                    <button  className = " submit-btn"type="submit">Submit</button> <br/>
                    </form>
            </div>
            {submittedData && (
                <div className="result-container">
                <h2> Displaying Results</h2>
                <p> Name -{submittedData.name}</p>
                <p> Email -{submittedData.email}</p>
                <p> Password - {submittedData.password}</p>
                <p> Confirm Password - {submittedData.confirmpassword}</p>
                <p> Role - {submittedData.role}</p>
                </div>
            )}
            </> )
            };
            export default Loginform;
                