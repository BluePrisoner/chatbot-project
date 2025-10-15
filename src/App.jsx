import { useState } from 'react'
import './App.css'
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';

function App()  {

    const [chatMessages,setChatMessages] = useState([]);
    
    return(
    <div className="app-container">
        
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput setChatMessages={setChatMessages} chatMessages={chatMessages}/>
        
    </div>
    )
}

export default App
