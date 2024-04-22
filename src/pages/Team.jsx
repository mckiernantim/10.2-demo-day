import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import teams from '../fellows.json'
import Button from 'react-bootstrap/Button';

const Team = () => {
    const [team, setTeam] = useState(null)
    const { name } = useParams()


    useEffect(() => {
        setTeam(() => {
            return teams.find((team) => team.team === name)
        })
    }, [name])
    return (
        <>
            <h1>{team?.team}</h1>
            <div className="fellow-links">
            {
                team && team.members.map((fellow, i) => (
                    <Link key={i} to={`/${name}/${fellow.name}`} className="fellow-link">
                        <img src={fellow.image} />
                        <div className="text-overlay">
                            <p>{fellow.name.toUpperCase()}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
            <Link to={`/`}>
                <Button variant="warning" id="back">Back</Button>
            </Link>
        </>
    );
};

export default Team;