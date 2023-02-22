import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    frequency: "",
    sqFoot: 0,
    text: "",
  });

  const addFormData = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = () => {
    console.log(formData)
  }

  return (
    <form>
      <h3>Get a Cleaning Estimate</h3>
      <div className='inputbox'>
        <input
          type="text"
          required
          id="name"
          value={formData.name}
          onChange={addFormData}
        />
        <span>Name</span>
      </div>
      <div className='inputbox'>
        <input
          type="email"
          required
          id="email"
          value={formData.email}
          onChange={addFormData}
        />
        <span>Email</span>
      </div>
      <div className='inputbox'>
        <input
          type="text"
          required
          id="frequency"
          value={formData.frequency}
          onChange={addFormData}
        />
        <span>Frequency of cleaning</span>
      </div>
      <div className='inputbox'>
        <input
          type="number"
          required
          id="sqFoot"
          value={formData.sqFoot}
          onChange={addFormData}
        />
        <span>Sq foot to be cleaned</span>
      </div>

      <textarea
        type="text"
        required
        id="text"
        value={formData.text}
        onChange={addFormData}
        placeholder='Tell us more about your cleaning needs so we can give you a more accurate estimate. How is the space used? Does it have any special cleaning needs?" data-aid="Tell us more about your cleaning needs so we can give you a more accurate estimate. How is the space used? Does it have any special cleaning needs?'
      />
      <button type="submit" onClick={onSubmit}>Send</button>
    </form>
  );
};

export default Form;
