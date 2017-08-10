import React from 'react';

const Destination = (props) => {
  let id = props.id;
  let name = props.name;
  let handleClick = () => {
    props.setSelected(id)
  }
  return(
    <div className={props.strike} onClick={handleClick}>{name}</div>
  )
}

export default Destination;
