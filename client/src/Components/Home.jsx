import React, { useState } from 'react'
import './home.css'
export default function Home(props) {
    const submitvalue=async ()=>{
       alert("let's see Solution")
       console.log(props.values);
       await props.setValues("asjhlffh");
       console.log(props.values);
    }
    const [ user, setUser] = useState({
      text:"",
     })
     const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  return (
    <div className='container my-4'>
<div class="mb-3">
    <img src='https://www.medicaps.ac.in/sitefront/university/assets/img/logo_transparent.png' alt='medicaps' className='my-4 alert alert-dark'  style={{ borderRadius:"4px",padding:"10px"}}/>
    <h2 for="exampleFormControlTextarea1" class="form-label text">WORD SENSE DISAMBIGUATION IN HINDI LANGUAGE USING MACHINE LEARNING</h2>
  <br/>
  {/* <div className='row'>
  <h2 for="exampleFormControlTextarea1" class="form-label col col-lg-3 my-4" style={{paddingTop:"40px"}}>Input Sentence:</h2>
  <br/>
  <textarea class="form-control mx-4 col" id="exampleFormControlTextarea1"  type="text" name="text"     value={user.text}            placeholder="Enter Text Here"
               onChange={ handleChange } rows="7"></textarea>
  </div>
  <br/> */}
  <a className='btn btn-success mx-3' href="/result" >Go To Next Page</a>
</div>
<br/>
<div className='row'>

  <div className='col btn btn-secondary mx-2'>
    <br/>
    <h2 style={{color:"bisque"}}>Submitted By:</h2>
    <h2 style={{color:"skyblue"}}>BINOD KUMAR MISHRA</h2>
    <h2>Ph.D Scholar</h2>
    <h2>Enrollemnt No. : EN18CS601001</h2>
    <br/>
  </div>
  <div className='col btn btn-secondary mx-2'>
  <br/>
  {/* <br/> */}
  <h2 style={{color:"bisque"}}>Supervisor:</h2>
    <h2  style={{color:"skyblue"}}>Dr. Suresh Jain</h2>
    <h2>Professor, Compter Science and Engineering Department</h2>
    <br/>
  </div>
</div>
      </div>
  )
}
