import React from "react"
import onlineIcon from "../../icons/onlineIcon.png"
import "./TextContainer.css"

const TextContainer = ({users}) => (
   <div className="textContainer">
       {
      users
        ? (
          <div>
            <h1>People Online in the Chat Room:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                    <div className="activeItem" key={name}> {name}
                    <img alt="OnlineIcon" src={onlineIcon} /> 
                    </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
   </div>
)

export default TextContainer