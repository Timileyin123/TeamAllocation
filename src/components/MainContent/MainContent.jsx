import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Employees from "../Employees/Employees";
import TeamGrouped from "../TeamGrouped/TeamGrouped";
import Footer from "../Footer/Footer";
import { getEmployee, setValues, getTeam } from "../../Storage/Storage";
import NavBar from "../NavBar/NavBar";
import NotFound from "../NotFound/NotFound";

const MainContent = () => {

    const [team, setTeam] = useState(getTeam("select") || "Team A")

    const [employees, setEmployees] = useState(getEmployee("id") || [{
         id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "Team A"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "Team A"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "Team B"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Team B"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "Team C"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "Team C"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "Team D"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "Team D"
    }])

    useEffect(() => {
      setValues("id", employees)
      setValues("select", team)
    }, [employees, team]);

    const teamChangeHandler = (event) =>{
      setTeam(event.target.value);
    }
    const cardClickHandler = (event) => {
      const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === team)?{...employee, teamName: " "}: {...employee, teamName: team} : employee);

      setEmployees(transformedEmployees)
    }

    return(
        <Router>
          <NavBar />
            <Header team={team}
      teamMemberCount={employees.filter((employee) =>employee.teamName === team).length}/>
          <Routes>
            <Route path="/" element={<Employees 
            team={team}
            employees={employees}
            teamChangeHandler={teamChangeHandler}
            cardClickHandler={cardClickHandler}
            />}>
            </Route>

            <Route path="/TeamGrouped" element={<TeamGrouped employees={employees} 
            team={team}
            setTeam={setTeam}/>}>
            </Route>
            
            <Route path="*" element={<NotFound/>}>

            </Route>
          </Routes>
            
            <Footer />
        </Router>
    );
}

export default MainContent;