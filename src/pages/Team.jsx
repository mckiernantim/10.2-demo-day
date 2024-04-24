import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import tenOneInfo from "../tenOneFellows.json"
import tenTwoInfo from "../tenTwoFellows.json"
import Button from 'react-bootstrap/Button';

const Team = () => {
    const [team, setTeam] = useState(null)
    const { name, className } = useParams()
    const allTeams = className === "10.1" ? tenOneInfo : tenTwoInfo
    useEffect(() => {
        setTeam(() => {
            return allTeams.find((team) => team.team === name)
        })
    }, [name])
    console.log(team)
    return (
        <>
            { team && 
                <h1>
                    <a href={team?.url} target="_blank" id="app-link">
                        {team?.team}
                    </a>
                </h1> 
            }
            <div className="fellow-links">
            {
                team && team.members.map((fellow, i) => (
                    <Link key={i} to={`${fellow.name}`} className="fellow-link">
                        <img src={`/${fellow.image}`} alt={fellow.image}/>
                        <div className="text-overlay">
                            <p>{fellow.name.toUpperCase()}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
            <Link to={`/${className}`}>
                <Button variant="warning" id="back">Back</Button>
            </Link>
        </>
    );
};

export default Team;