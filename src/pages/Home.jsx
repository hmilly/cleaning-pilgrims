import { Link } from "react-router-dom";
import WhyUsBanner from "../components/WhyUsBanner";
import FbBanner from "../components/FbBanner";

const Home = () => {
  return (
    <main className="home">
      <div className="home-img">
        <div>
          <h2>EXPERT COMMERCIAL CLEANING SERVICES IN SOUTH-EAST KENT</h2>
          <h3>A clean room is a clear mind</h3>
          <h3>A clear mind is a productive day</h3>
          <br></br>
          <Link className="btn" to="/contact">
            BOOK NOW
          </Link>
        </div>
      </div>

      <WhyUsBanner />
      <FbBanner />
    </main>
  );
};

export default Home;
