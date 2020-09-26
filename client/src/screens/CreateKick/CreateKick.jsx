import React, { useState } from "react";
// import Header from "../../Components/Header/Header";
// import Nav from "../../Components/Shared/Nav/Nav";

const CreateKick = (props) => {
  const [kick, setKick] = useState({
    name: "",
    image_url: "",
  });
const{handleCreate} = props

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKick({
      ...kick,
      [name]: value,
    });
  };

 

  return (
   
      <div>
        <form onSubmit = {(event)=>{
          event.preventDefault()
          handleCreate(kick)



        }}>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
   
  );
};

export default CreateKick;
