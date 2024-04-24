import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1> Pursuit Demo Day </h1>
      <h3>Select A Cohort</h3>
      <ul className="landing-link-ul">
        <li>
          <Link to="/10.1"> 10.1 </Link>
        </li>
        <li>
          <Link to="/10.2"> 10.2 </Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
