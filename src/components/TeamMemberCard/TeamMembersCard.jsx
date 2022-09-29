import femaleProfile from '../../Images/femaleProfile.jpg';
import maleProfile from '../../Images/maleProfile.jpg'
const TeamMembersCard = ({employee, cardClickHandler, team}) => {
    return(
          <div className={(employee.teamName === team ) ? "card m-2 standout" : "card m-2 "} id={employee.id} key={employee.id} onClick={cardClickHandler}>
                    {(employee.gender === 'male') ? <img src={maleProfile} className='card-img-top' alt='malephoto'/>
                    : <img src={femaleProfile} className='card-img-top' alt='femalephoto'/>}
                     <div className="card-body">
                       <h5 className="card-title">Full Name: {employee.fullName}</h5>
                       <p className="card-text"><b>Designation: {employee.designation}</b></p>
                     </div>
                   </div>
    );
}
export default TeamMembersCard;