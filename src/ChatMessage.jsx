
function ChatMessage(props) {

    const {message} = props;
    const {sender} = props;

    const image = (sender === "user" ? "https://supersimple.dev/projects/chatbot/user.png" : "https://supersimple.dev/projects/chatbot/robot.png");

    
    return (
        <>
            <div className={sender==="user" ? "chat-msg-user" : "chat-msg-robot"}>
                {sender === "robot" && <img src={image} className="profile-pic-robot" width="50" />}
                <p className="message">{message==="Loading..." ? <img className="loading-spinner" src="https://supersimple.dev/images/loading-spinner.gif"/> : message}</p>
                {sender === "user" && <img src={image} className="profile-pic-user" width="50" />}

            </div>

        </>
    )
           

}

export default ChatMessage