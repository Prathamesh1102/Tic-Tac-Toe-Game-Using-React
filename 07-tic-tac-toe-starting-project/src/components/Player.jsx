import React from "react";
import { useState } from "react";

export default function Player({ initialName , symbol , isActive , onChangeName}){

    const[ playerName, SetPlayerName] = useState(initialName)
    const[ isEditing , setIsEditing ] = useState(false);

    function handleChange(event){
      SetPlayerName(event.target.value);
    }

    function handelEditClick(){
        setIsEditing((editing) => !editing);
        
        if (isEditing){
          onChangeName(symbol , playerName)
        }
     }
    
    let editablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing) {
      editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
    }


    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handelEditClick}>{isEditing ? 'save' : 'Edit'}</button>
        </li>
    );
}