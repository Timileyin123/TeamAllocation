import React, {useState} from "react";
import './TeamGrouped.css';
const TeamGrouped = ({employees, team, setTeam}) => {

    const [teamGrouped, setTeamGrouped] = useState(TeamMembers());

    function TeamMembers (){
        var teams = [];

        var teamAMembers = employees.filter((employee) => employee.teamName === "Team A");
        var teamA = {team: 'Team A', members: teamAMembers, collapsed: team === "Team A" ? false : true}
        teams.push(teamA);

        var teamBMembers = employees.filter((employee) => employee.teamName === "Team B");
        var teamB = {team: 'Team B', members: teamBMembers, collapsed: team === "Team B" ? false : true}
        teams.push(teamB);

         var teamCMembers = employees.filter((employee) => employee.teamName === "Team C");
        var teamC = {team: 'Team C', members: teamCMembers, collapsed: team === "Team C" ? false : true}
        teams.push(teamC);

         var teamDMembers = employees.filter((employee) => employee.teamName === "Team D");
        var teamD = {team: 'Team D', members: teamDMembers, collapsed: team === "Team D" ? false : true}
        teams.push(teamD);

        return teams;
    }

    const teamClickHandler = (event) => {
        var transformedGroupedData = teamGrouped.map((groupedData) => groupedData.team === event.currentTarget.id 
        ? {...groupedData, collapsed : !groupedData.collapsed} : groupedData);
        setTeamGrouped(transformedGroupedData);
        setTeam(event.currentTarget.id);
    }
    return(
        <div className="container">
            {
                teamGrouped.map((item)=> {
                    return (
                        <div className="card mt-2" key={item.team}>
                            <h4 className="card-header text-secondary bg-white" id={item.team} onClick={teamClickHandler}>
                                Team Name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : " "}>
                                <hr />
                                {
                                    item.members.map(member => {
                                        return(
                                            <div className="mt-2" 
                                            >
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Fullname: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default TeamGrouped;