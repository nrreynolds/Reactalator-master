import React from 'react';

const Tile = (props) => {
  const double = props.size === 2 ? '200px' : '';
  return (
    <div
      style={{width: double}}
      className='tile'
      onClick={() => props.log(props.symbol)}
      onClick={() => props.handleClick(props.symbol)}
    >
      <h5>
        { props.symbol }
      </h5>
    </div>
  );
}

export default Tile;
