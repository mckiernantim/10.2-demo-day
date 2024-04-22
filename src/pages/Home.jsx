import fellowInfo from '../fellows.json'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
          <h1>PURSUIT DEMO DAY | 10.1</h1>
          <div>
          {
            fellowInfo.map((team, i) => (
              <div key={i} className="team">
                <Link to={`/${team.team}`}>
                  <img src={team.logo} className="square"/>
                </Link>
                {
                  team.members.map((member) => (
                    <Link to={`/${team.team}/${member.name}`}>
                      <img src={member.image} className="show-hide square" />
                    </Link>
                  ))
                }
              </div>
            ))
          }
          </div>
        </>
    );
};

export default Home;