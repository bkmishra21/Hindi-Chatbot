import React, { useState } from 'react';
import axios from 'axios';

export default function Result() {
  const [messages, setMessages] = useState([
    { sender: 'User', text: "हैलो" },
    { sender: 'Bot', text:"नमस्कार, मैं कैसे मदद कर सकता हूं?" }
    // You can add more messages here
  ]);

  const [message, setMessage] = useState('');

  const submit = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'User', text: message }
    ]);
    axios
      .post('/chat', { message: message })
      .then((res) => {
        console.log(res.data);
        const responseMessage = res.data.response;

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'Bot', text: responseMessage }
        ]);

        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className='container my-4'>
        <div className='mb-3'>
             {/* <img src='https://www.medicaps.ac.in/sitefront/university/assets/img/logo_transparent.png' alt='medicaps' className='my-4 alert alert-dark'  style={{ borderRadius:"4px",padding:"10px"}}/>
     <h2 for="exampleFormControlTextarea1" class="form-label text">WORD SENSE DISAMBIGUATION IN HINDI LANGUAGE USING MACHINE LEARNING</h2> */}
   <br/>
   {/* <div className='row'>
   <h2 for="exampleFormControlTextarea1" class="form-label col col-lg-3 my-4" style={{paddingTop:"40px"}}>Input Sentence:</h2>
   <br/>
   <textarea class="form-control mx-4 col" id="exampleFormControlTextarea1"  type="text" name="text"                placeholder="Enter Text Here"
                 rows="7"></textarea>
   </div>
   <br/>
   <a className='btn btn-success mx-3' onClick={()=>{ alert("submited") }} >Submit</a> */}
          <div className="chat-app">
            <div className="chat-header">
              <h1>Hindi Chatbot</h1>
            </div>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div className="message row" key={index}>
                  <div className='col row'><div className='col' style={{textAlign:"end",paddingTop:"20px"}}><div className="message-sender">{message.sender}</div></div>
                    <div className='col avtar-main-box'>{message.sender==="Bot"?<img className='avtar' src="./bot.jpg" alt='user-bot'/>:<img className='avtar' src="./userimg.jpg" alt='user-bot'/>}</div></div>
                  <div className='col'>
                  {/* <div className="message-sender">{message.sender}</div> */}
                  <div className="message-text">{message.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="आप अपना सन्देश लिखें "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={submit}>Send</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
