import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKick, updateKick } from "../../Services/kicks";
// import Header from "../../Components/Header/Header";

const EditKick = (props) => {
  const [kick, setKick] = useState({
    name: "",
    image_url:""
  });
const {handleEdit} = props

  let { id } = useParams();

  useEffect(() => {
    const fetchKick = async () => {
      const kick = await getKick(id);
      setKick(kick);
    };
    fetchKick();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKick({
      ...kick,
      [name]: value,
    });
  };


  return (
    <>
      <div>
        <form onSubmit={(event)=>{
          event.preventDefault()
          handleEdit(id, kick)



        }}>
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
          <label htmlFor="image_url">Image</label>
          <input
            type="text"
            name="image_url"
            id="image_url"
            placeholder="Image"
            value={kick.image_url}
            required
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
    </>
  );
};

export default EditKick;
