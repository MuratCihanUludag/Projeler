import React,{useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {useChat} from "../context/chatContext"

import {init, subcribeChat, subcribeInitialMessages} from "../socketApi"

function Container() {
  const {setMessages} = useChat();
  useEffect(()=> {
    init();
    subcribeChat((message)=> {
      setMessages(prevState => [...prevState, {message, fromMe: true}]);
      
    })
    subcribeInitialMessages((message)=> {
      setMessages(message)
    })
  },[])
  return (
    <div className='App'>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container