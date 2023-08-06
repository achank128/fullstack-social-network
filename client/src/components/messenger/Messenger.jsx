import React from "react";
import "./messenger.css";
import Topbar from "../topbar/Topbar";
import Conversation from "../conversation/Conversation";

function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            <Conversation />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">b</div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">o</div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
