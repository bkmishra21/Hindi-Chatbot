import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Result() {
  const [messages, setMessages] = useState([
    { sender: 'User', text: "हैलो" },
    { sender: 'Bot', text: "नमस्कार, मैं कैसे मदद कर सकता हूं?" }
    // You can add more messages here
  ]);

  const [message, setMessage] = useState('');
  const messagesContainerRef = useRef(null);

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

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className='chat-bot-box'>
      <div className='container my-4'>
        <div className='mb-3'>
          <div className="chat-app"  style={{backgroundColor:"white"}}>
            <div className="chat-header">
              <h1>Hindi Chatbot</h1>
            </div>
            <div className="chat-messages" ref={messagesContainerRef}>
              {messages.map((message, index) => (
                <div className="message row" key={index}>
                  <div className='col row'>
                    <div className='col' style={{ textAlign: "end", paddingTop: "20px" }}>
                      <div className="message-sender">{message.sender}</div>
                    </div>
                    <div className='col avtar-main-box'>
                      {message.sender === "Bot" ? <img className='avtar' src="./bot.jpg" alt='user-bot' /> : <img className='avtar' src="./userimg.jpg" alt='user-bot' />}
                    </div>
                  </div>
                  <div className='col'>
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
