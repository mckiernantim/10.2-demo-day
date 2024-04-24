import { useState, useEffect } from 'react';
import tenOneInfo from "../tenOneFellows.json"
import tenTwoInfo from "../tenTwoFellows.json"
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';


const FellowProfile = () => {
    const [fellowInfo, setFellowInfo] = useState(null)
    const { name, fellow, className } = useParams()


    const teams = className === "10.1" ? tenOneInfo : tenTwoInfo;
  

    useEffect(() => {
        const team = teams.find(team => team.team === name)
        setFellowInfo(() => {
            return team.members.find(f => f.name === fellow)
        })
    }, [fellowInfo, teams, name, fellow]) 

    return (
        <>
            {
                fellowInfo ?
                <div>
                    <h1 style={{ letterSpacing: "4px" }}>{fellowInfo.name.toUpperCase()}</h1>
                    <img className="profile-pic" src={`/${fellowInfo?.image}`} />
                    
                    <p>{fellowInfo.bio}</p>

                    <div className="ul">
                        <li className='icon'>
                            
                        <a href={fellowInfo.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} 
                            color={"black"}
                            size={"4x"} />
                            </a>
                        </li>
                        <li className="icon">
                            <a href={fellowInfo.linkedin} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} 
                            color={"black"}
                            size={"4x"} />
                            </a>
                        </li>
                    </div>
                    <Link to={`/${className}/${name}`}>
                        <Button variant="warning" id="back">Back</Button>
                    </Link>
                    
                </div>
                : <></>
            }
        </>
    );
};

export default FellowProfile;