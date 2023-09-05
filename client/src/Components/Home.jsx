import React, { useState } from 'react'
import './home.css'
import Result from './Result';
export default function Home(props) {
  const submitvalue = async () => {
    alert("let's see Solution")
    console.log(props.values);
    await props.setValues("asjhlffh");
    console.log(props.values);
  }
  const [user, setUser] = useState({
    text: "",
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const [bot, setbot] = useState(true);
  return (
    <div className='hundred-vh-container'>
      <div className="logoTitle-container">
        <div className="logo-container">
          <img src='./medicapslogo.png' alt='medicaps' />
        </div>
        <div className="title-container">
          <h3>WORD SENSE DISAMBIGUATION IN HINDI LANGUAGE USING MACHINE LEARNING</h3>
        </div>
      </div>
      <div className="content-and-name-container">
        <div className="names-container">
          <div className="nameBox-container">
            <h2 style={{ color: "#941728ff" }}>Submitted By:</h2>
            <h2 style={{ color: "red" }}>BINOD KUMAR MISHRA</h2>
            <h2>Ph.D Scholar</h2>
            <h2>Enrollemnt No. : EN18CS601001</h2>
          </div>
          <div className="nameBox-container">
            <h2 style={{ color: "#941728ff" }}>Supervisor:</h2>
            <h2 style={{ color: "red" }}>Dr. Suresh Jain</h2>
            <h2>Professor, Compter Science and Engineering Department</h2>
          </div>
        </div>
        <div className="chatBot-container">
          {bot ? <Result values={props.value} setValues={props.setValue} /> : null}
        </div>
      </div>
    </div >
  )
}
