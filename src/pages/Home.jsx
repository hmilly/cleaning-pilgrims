import office from "../assets/office.png";
import WhyUs from "../components/WhyUs";

const Home = () => {
  return (
    <main className="home">
      <img src={office} alt="Office space" />
<WhyUs/>
    </main>
  );
};

export default Home;
