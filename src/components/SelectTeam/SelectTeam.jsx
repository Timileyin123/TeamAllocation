
const SelectTeam = ({team, teamChangeHandler}) => {
    return(
        <div>
             <select className='form-select form-select-lg' value={team} onChange={teamChangeHandler}>
                <option value="Team A">Team A</option>
                <option value="Team B">Team B</option>
                <option value="Team C">Team C</option>
                <option value="Team D">Team D</option>
              </select>
        </div>
    );
}
export default SelectTeam;