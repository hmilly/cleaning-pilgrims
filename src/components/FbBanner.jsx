import { BsFacebook } from "react-icons/bs";

const FbBanner = () => {
  return (
    <section className="FbBanner">
      <a
        target="_blank"
        href="https://www.facebook.com/kentcleaningpilgrims/"
        rel="noreferrer"
        aria-label="facebook"
      >
        <BsFacebook />
      </a>
    </section>
  );
};

export default FbBanner;
