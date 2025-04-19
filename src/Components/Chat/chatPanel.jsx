import NavBar from "../Layouts/NavBar";

import "../Chat/chat.css"
import Chat from "./chat";

export default function ChatPanel () {
    return(
        <div className="prestador-main-container">
                <NavBar />
                <Chat /> 
            </div>
    )
}