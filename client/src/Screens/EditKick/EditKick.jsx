import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKick, updateKick } from "../../services/kicks";
import Header from "../../Components/Header/Header";

const EditKick = () => {
  const [kick, setKick] = useState({
    name: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchKick = async () => {
      const kick = await getKick(id);
      setPet(kick);
    };
    fetchKick();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPet({
      ...kick,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updatePet(id, kick);
  };

  return (
    <Nav>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            value={kick.name}
            name="name"
            autoFocus
            placeholder="Name"
            onChange={handleChange}
          />
          <label htmlFor="submitButton"></label>
          <input
            type="submit"
            value="submit"
            name="submitButton"
            id="submitButton"
          />
        </form>
      </div>
    </Nav>
  );
};

export default EditKick;
