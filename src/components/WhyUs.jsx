import cleaner from "../assets/cleaner.png";
import crew from "../assets/crew.png";
import room from "../assets/room.png";

const WhyUs = () => {
  return (
    <div className="banner-whyUs">
      <h3>WHY CHOOSE US?</h3>
      <div className="banner-whyUs-div">
        <div>
          <img src={room} alt="Orange room" />
          <h3>A Cleaner Environment</h3>
          <p>
            We offer commercial cleaning services for property managers,
            schools, churches, office buildings, and more. We customize our
            services to meet your specific needs. Ask us about daily, weekly,
            and bi-weekly service. Contracts welcome.
          </p>
        </div>
        <div>
          <img src={crew} alt="Cleaning crew" />
          <h3>Your Business is Ours</h3>
          <p>
            We promise quality, reliable cleaning services every time so our
            loyal customers feel special. We work hard to be the best. Our
            products are high-quality and safe. And we focus on the details, so
            you have a clean, orderly office every time.
          </p>
        </div>
        <div>
          <img src={cleaner} alt="Woman cleaning desk" />
          <h3>What We Offer</h3>
          <p> Some of our cleaning services include: </p>
          <ul>
            <li>Commercial</li>
            <li>Retail</li>
            <li>Rental</li>
            <li>Communal areas</li>
            <li>End of Tenancy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
