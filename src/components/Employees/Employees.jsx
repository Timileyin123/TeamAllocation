import React from 'react'
import './Employees.css';
import SelectTeam from '../SelectTeam/SelectTeam';
import TeamMembers from '../TeamMembers/TeamMembers';

const Employees = ({team, employees, teamChangeHandler, cardClickHandler }) => {

    return(
        <div className='container'>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6">
              <SelectTeam 
              team={team}
              teamChangeHandler={teamChangeHandler}/>
            </div>
          </div>
          <div className='row justify-content-center mt-3 mb-3'>
            <div className='col-8'>
              <div className="card-collection">
              {
              <TeamMembers team={team}
                employees={employees}
                cardClickHandler={cardClickHandler} />
              }
              </div>
            </div>
          </div>
        </div>
    );
}

export default Employees;