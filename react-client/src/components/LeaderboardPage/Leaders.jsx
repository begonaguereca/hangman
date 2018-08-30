import React from 'react';
import Leader from './Leader.jsx';
import {Link} from 'react-router-dom';

const Leaders = (props) => {
  return (
    <div className='leaders-main-page'>
      <h1 className='leaders-header text-center'>LEADER BOARD</h1>

      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Ranking</th>
            <th scope="col">Username</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          { props.leaders.map((human, i) => {
              let ranking = i + 1;
              return (<Leader name={human.name} score={human.score} ranking={ranking} key={i}/>)
            })
          }
        </tbody>
      </table>

      <Link to='/'>
        <div className="username-button-container text-center">
          <button type="button" className="h-button">Play Again!</button>
        </div>
      </Link>
    </div>
  )};

export default Leaders;
