import React, { useState } from "react";
import { createKick } from "../../services/kicks";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Shared/Nav/Nav";

const CreateKick = () => {
  const [kick, setKick] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKick({
      ...kick,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createKick(kick);
  };

  return (
    <Nav>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={kick.name}
            required
            autoFocus
            onChange={handleChange}
          />
          <label htmlFor="submitButton"></label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Nav>
  );
};

export default CreateKick;
