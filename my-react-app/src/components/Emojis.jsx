import React from 'react';
import Emoji from "./Emoji";


function Emojis({ emojis, onEmojiClick }) {
    return (
      <div>
        {emojis.map((emoji) => (
          <Emoji
            key={emoji.id}
            symbol={emoji.symbol}
            count={emoji.count}
            onClick={() => onEmojiClick(emoji.id)}
          />
        ))}
      </div>
    );
  }
  
  export default Emojis;