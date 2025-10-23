import {useRef,useState, useEffect} from 'react'
import ChatMessage from './ChatMessage';

import './ChatMessages.css'
function ChatMessages({chatMessages}){

            const chatMessagesRef =  useRef(null);


            useEffect(() => {
                const containerElem = chatMessagesRef.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
                
            },[chatMessages]);

            const [showElement, setShowElement] = useState(true);

            useEffect(() => {
                if (chatMessages.length > 0) {
                    setShowElement(false);
                }else{
                    setShowElement(true);
                }
            }, [chatMessages]); 

            return(
                <div className="chat-messages-container" ref={chatMessagesRef}>

                     {showElement && (
                        <div className="top-message">
                            <p>
                                Welcome to chatbot project! Send a message using the textbox below.
                            </p>
                        </div>
                    )}
                    {chatMessages.map((chatMessage) => {
                        
                        return(
                            <ChatMessage
                                message = {chatMessage.message}
                                sender = {chatMessage.sender} 
                                time = {chatMessage.time}
                                key = {chatMessage.id}
                            />
                        )
                    })}
                </div>
            )

}

export default ChatMessages