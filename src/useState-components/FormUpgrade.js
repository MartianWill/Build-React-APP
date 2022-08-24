import React, { useState } from "react";

function FormUpgrade() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email,
        };
      } else if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email,
        };
      } else if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormUpgrade;
