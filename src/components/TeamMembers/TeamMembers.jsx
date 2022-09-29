import TeamMembersCard from "../TeamMemberCard/TeamMembersCard";

const TeamMembers = ({employees, cardClickHandler, team}) => {
    return(
        employees.map((employee) =>(
            <TeamMembersCard 
            employee={employee}
            cardClickHandler={cardClickHandler}
            team={team}/>
        ))
    );
 }
 export default TeamMembers;