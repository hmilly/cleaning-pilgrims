import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    frequency: "",
    sqFoot: "",
    text: "",
  });

  const addFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = () => {
    console.log(formData);
  };

  const { name, email, address, frequency, sqFoot, text } = formData;

  return (
    <form>
      <h3>Get a Cleaning Estimate</h3>
      <div className="inputbox">
        <input type="text" id="name" value={name} onChange={addFormData} />
        <span className={`${name !== "" && "inputFilled"}`}>Name</span>
      </div>
      <div className="inputbox">
        <input
          type="email"
          required
          id="email"
          value={email}
          onChange={addFormData}
        />
        <span className={`${email !== "" && "inputFilled"}`}>Email*</span>
      </div>
      <div className="inputbox">
        <input
          type="address"
          id="address"
          required
          value={address}
          onChange={addFormData}
        />
        <span className={`${address !== "" && "inputFilled"}`}>Property address</span>
      </div>
      <div className="inputbox">
        <input
          type="text"
          required
          id="frequency"
          value={frequency}
          onChange={addFormData}
        />
        <span className={`${frequency !== "" && "inputFilled"}`}>
          Frequency of cleaning
        </span>
      </div>
      <div className="inputbox">
        <input
          type="number"
          required
          id="sqFoot"
          value={sqFoot > 0 ? sqFoot : ""}
          onChange={addFormData}
        />
        <span className={`${sqFoot > 0 && "inputFilled"}`}>
          Sq foot to be cleaned (num only)
        </span>
      </div>
      <textarea
        type="text"
        id="text"
        value={text}
        onChange={addFormData}
        placeholder="Tell us more about your cleaning needs so we can give you a more accurate estimate. How is the space used? Does it have any special cleaning needs?"
      />
      <button type="submit" onClick={onSubmit}>
        Send
      </button>
      <div className="form-p">
        <p>
          This site is protected by reCAPTCHA and the{" "}
          <a
            id="yellowLink"
            href="https://policies.google.com/privacy"
            target="_blank"
          >
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a
            id="yellowLink"
            href="https://policies.google.com/terms"
            target="_blank"
          >
            Terms of Service
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default Form;
