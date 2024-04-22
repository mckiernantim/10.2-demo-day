import fellowInfo from '../fellows.json'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
          <h1>PURSUIT DEMO DAY | 10.1</h1>
            {
          fellowInfo.map((team, i) => (
            <div key={i}>
              <Link to={`/${team.team}`}>
                <img src={team.logo}/>
              </Link>
            </div>
          ))
      }
        </>
    );
};

export default Home;