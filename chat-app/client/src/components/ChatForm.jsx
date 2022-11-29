import React, { useState } from "react";
import "./style.css";
import {sendMessage} from "../socketApi"
import {useChat} from "../context/chatContext"

function ChatForm() {
  const [message, setMessage] = useState("");
  const {setMessages} = useChat()
  const handleForm = ((e)=> {
    e.preventDefault();
    setMessages((prevState)=> [...prevState,{message}])
    sendMessage(message)
    setMessage("")

  })
  return (
    <div>
      <form onSubmit={handleForm}>
        <input className="textInput" value={message} onChange={(e) => setMessage(e.target.value)} />
      </form>
    </div>
  );
}

export default ChatForm;
