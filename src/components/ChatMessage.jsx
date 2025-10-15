
import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import LoadingSpinner from '../assets/loading-spinner.gif'

import './ChatMessage.css'
function ChatMessage(props) {

    const {message} = props;
    const {sender} = props;

    const image = (sender === "user" ?  UserImage : RobotImage);

    
    return (
        <>
            <div className={sender==="user" ? "chat-msg-user" : "chat-msg-robot"}>
                {sender === "robot" && <img src={image} className="profile-pic-robot" width="50" />}
                <p className="message">{message==="Loading..." ? <img className="loading-spinner" src={LoadingSpinner}/> : message}</p>
                {sender === "user" && <img src={image} className="profile-pic-user" width="50" />}

            </div>

        </>
    )
           

}

export default ChatMessage