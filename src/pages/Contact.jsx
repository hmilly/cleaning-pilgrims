import Form from "../components/Form";

const Contact = () => {
  return (
    <main className="contact">
      <h2>CONTACT US</h2>
      <div className="contact-main">
        <Form />
        <aside>
          <h3>Questions or Comments?</h3>
          <p>
            We understand that every commercial situation has unique cleaning
            needs. Feel free to message or call us with any specifics.
          </p>
          <p>
            Your time is valuable, and we will make sure to get back to you as
            soon as we can.
          </p>
          <p>Thanks!</p>
          <p id="lg-txt">Kent Cleaning Pilgrims Ltd.</p>
          <p>Folkestone, Kent, England, United Kingdom</p>

          <div>
            <a href="tel:07984469148" id="yellowLink" aria-label="company telephone number">
              07984469148
            </a>
            <a href="mailto:kentcleaningpilgrims@gmail.com" id="yellowLink" aria-label="company email">
              kentcleaningpilgrims@gmail.com
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Contact;
