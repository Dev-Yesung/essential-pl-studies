import { useState } from "react"

const handleEditClick = (setIsEditing) => {
  setIsEditing((editing) => !editing);
}

const handlePlayerNameChange = (event, setPlayerName) => {
  setPlayerName(event.target.value);
}

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  
  return (
    <li>
      <span className="player">
        {isEditing ?
          <input type="text"
            value={playerName}
            onChange={(event) => handlePlayerNameChange(event, setPlayerName)}
            required />
          : <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleEditClick(setIsEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}