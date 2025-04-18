import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhonetype] = useState("");
  const [comments, setComments] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType: phone,
      comments,
      submittedOn: new Date(),
    };
    console.log(contactUsInformation);
    setName("");
    setEmail("");
    setPhone("");
    setPhonetype("");
    setComments("");
  };
  return (
    <div>
      <h2>Contact us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhonetype(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Mobile</option>
            <option>Work</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          onChange={(e) => setComments(e.target.value)}
          value={comments}
        />
      </div>
    </div>
  );
};
export default ContactUs;
