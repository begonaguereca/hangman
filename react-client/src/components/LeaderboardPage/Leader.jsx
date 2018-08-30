import React from 'react';

const Leader = (props) => {
  return (
    <tr>
      <th scope="row">{props.ranking}</th>
      <td>{props.name}</td>
      <td>{props.score}</td>
    </tr>
  )};

export default Leader;
