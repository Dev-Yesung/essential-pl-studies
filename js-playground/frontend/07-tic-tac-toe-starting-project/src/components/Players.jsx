import { useState } from "react";
import Player from "./Player";
import { DEFAULT_PLAYERS_DATA } from "../data/gameData";

export default function Players() {
  return (
    <ol id="players">
      {DEFAULT_PLAYERS_DATA.map((playerItem) => <Player key={playerItem.initialName} {...playerItem} />)}
    </ol>
  )
}