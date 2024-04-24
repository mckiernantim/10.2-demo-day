import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import tenOneInfo from "../tenOneFellows.json"
import tenTwoInfo from "../tenTwoFellows.json"
const Home = () => {

  const { className } = useParams()
  const fellowInfo = className === "10.1" ? tenOneInfo : tenTwoInfo; 
    return (
        <>
          <h1>PURSUIT DEMO DAY | {className} </h1>
          <div className="flex">
            {
              fellowInfo.map((team, i) => (
                <div key={i} className="team">
                  <Link to={`${team.team}`}>
                    <img src={team.logo} className="square"/>
                  </Link>
                  {
                    team.members.map((member) => (
                      <Link to={`${team.team}/${member.name}`}>
                        <img src={member.image} className="show-hide square" />
                      </Link>
                    ))
                  }
                </div>
              ))
            }
            <h3>BLACKROCK | April {className === "10.2" ? "22nd" : "23rd"}</h3>
          </div>
        </>
    );
};

export default Home;