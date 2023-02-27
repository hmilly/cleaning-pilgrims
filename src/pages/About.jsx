import cleaner from "../assets/cleaner2.png";
import crew from "../assets/crew.png";
import room from "../assets/room2.png";

const About = () => {

  return (
    <main className="about">
      <h2>ABOUT US</h2>
      <div className="main-content">
        <div>
          <img src={crew} alt="Cleaning crew" />
          <h3>Not Your Average Cleaners</h3>
          <p>
            Our staff are extensively trained to provide an exceptional service.
            We offer all staff the opportunity to further develop their skills
            and knowledge by undertaking competence-based qualifications and
            NVQs as part of our comprehensive training programme. This ensures
            that our team is highly skilled and able to provide the highest
            standard of cleaning.
          </p>
        </div>
        <div>
          <img src={room} alt="Hoover in a hallway" />
          <h3>Green Cleaning</h3>
          <p>
            Commercial cleaning is more than just water in a bucket. There are
            safety protocols and standards to be met in order to ensure all jobs
            are done properly and thoroughly for the safety of anyone entering
            the site. All of our technicians are trained to handle your
            environment. For us, when it comes to health and safety, there's no
            room for error.
          </p>
        </div>
        <div>
          <img src={cleaner} alt="Woman wiping shelving" />
          <h3>What We Offer</h3>
          <p>
            We are committed to protecting the environment. That's why we
            actively promote the use of green cleaning methods and products to
            our clients and staff. Our goal is to minimize the impact of our
            services on the environment while still providing the highest level
            of cleaning.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
