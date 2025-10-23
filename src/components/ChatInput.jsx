import { useState, useEffect, useRef } from "react";
import { Chatbot } from 'supersimpledev';

import './ChatInput.css'
import dayjs from "dayjs";


function ChatInput({setChatMessages,chatMessages}) {

    const[inputText, setInputText] =  useState('')
    const[loading, setLoading] =   useState(false);

    const inputRef =   useRef(null);

        useEffect(()=>{
        inputRef.current.focus();
    }, []);

        useEffect(() => {
        if (!loading) {
        inputRef.current?.focus();
        }
    }, [loading]);


    function saveInputText(event){
        setInputText(event.target.value);
    }

    async function chatBotResponse(inputText,chatMessages){

        setLoading(true);
        
        setChatMessages(prev => [
            ...prev,
            {
                message:"Loading...",
                sender:"robot",
                id: crypto.randomUUID()
            },
        ]);
        const response = await Chatbot.getResponseAsync(inputText);
        setLoading(false);

        const milliTime = dayjs().valueOf();
        const time = dayjs(milliTime).format('h:mma');

        setChatMessages(prev =>{
            const updated = [...prev];
            updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                message:response,
                time
            }
            return updated;
        });
    }

    function sendMessage(){

        
        if(!inputText.trim()) return; // avoid empty input value 

        const milliTime = dayjs().valueOf();
        const time = dayjs(milliTime).format('h:mma');
        const newChatMessage = [                    //new variable as we cannot send the chatMessages
                                    ...chatMessages,
                                    {
                                        message:inputText,
                                        sender:"user",
                                        id: crypto.randomUUID(),
                                        time
                                    }
                                ]
        setChatMessages(newChatMessage);
        
        chatBotResponse(inputText,newChatMessage);
        
        
        setInputText('');
    }

    function clearMessage(){
        setChatMessages([]);
    }

    function keyEventHandler(event){
        if(event.key==='Enter'){
            sendMessage();
        }else if(event.key==='Escape'){
            setInputText('');
        }
    }



    return (
        
        <div className="chat-input-conatiner">
            <input 
                type="text" 
                placeholder="Send a message to chatbot" 
                size="30" 
                className="chat-input"
                onChange={saveInputText}
                value={inputText}
                onKeyDown={keyEventHandler}
                disabled={loading}
                ref={inputRef}
            />
            <button onClick={sendMessage} className="send-button" disabled={loading}>Send</button>
            <button onClick={clearMessage} className="clear-button" disabled={loading}>Clear</button>
        </div>
        
    )
}
export default ChatInput