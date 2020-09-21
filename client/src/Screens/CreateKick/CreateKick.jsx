import React, { useState } from "react";
import { createKick } from "../../services/kicks";
import Layout from "../../components/shared/Layout/Layout";

const CreatePet = () => {
  const [pet, setPet] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet({
      ...pet,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPet(pet);
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={pet.name}
            required
            autoFocus
            onChange={handleChange}
          />
          <label htmlFor="submitButton"></label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default CreatePet;
