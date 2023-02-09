import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
