import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(); // To prevent unmounting and recreating the player on every render.
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function hanldeClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? " unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={hanldeClick}>Set Name</button>
      </p>
    </section>
  );
}
