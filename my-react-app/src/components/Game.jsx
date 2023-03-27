import Emoji from "./Emoji";
import Emojis from "./Emojis"
import Button from "./Button"
import React, { useState } from "react";

function Game() {
  const [emojis, setEmojis] = useState([
    { symbol: "😀", id: 1, count: 0 },
    { symbol: "😍", id: 2, count: 0 },
    { symbol: "🤔", id: 3, count: 0 },
    { symbol: "🥰", id: 4, count: 0 },
  ]);

  const [winner, setWinner] = useState(null);

  const handleEmojiClick = (id) => {
    const updatedEmojis = emojis.map((emoji) =>
      emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
    );
    setEmojis(updatedEmojis);
  };

  const handleShowResults = () => {
    const winningCount = Math.max(...emojis.map((emoji) => emoji.count));
    const winningEmoji = emojis.find((emoji) => emoji.count === winningCount);
    setWinner(winningEmoji);
  };

  return (
    <div>
      <Emojis emojis={emojis} onEmojiClick={handleEmojiClick} />
      <Button onClick={handleShowResults} className="button" />
      {winner && <div>The winning emoji is: {winner.symbol}</div>}
    </div>
  );
}

export default Game;