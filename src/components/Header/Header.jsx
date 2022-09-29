import "./Header.css"
const Header = ({team, teamMemberCount}) => {
    return(
        
        <div className="container mt-3 mb-4">
            <h1>Team Member Allocation</h1>
            {
                (()=>{
                    if(teamMemberCount===0){
                        return <h2>{team} Has No Member</h2>
                    }
                    else{
                        return ( <h2>{team} Has {teamMemberCount} {teamMemberCount === 1 ? "Member" : "Members"}</h2>)
                    }
                })()

            }
            
        </div>
    );
}

export default Header;