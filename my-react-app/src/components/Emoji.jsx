import React from 'react';

function Emoji({ symbol, count, onClick }) {
    return (
      <div>
        <span className='emoji' onClick={onClick}>{symbol}</span>: {count}
      </div>
    );
  }

export default Emoji;