import React, { useState, useEffect } from "react";
import { getKick, deleteKick } from "../../Services/kicks";
import { useParams, Link } from "react-router-dom";
import KickInfo from "../../Components/KickInfo/KickInfo";

import "./KickDetail.css";

const KickDetail = (props) => {
  const [kick, setKick] = useState(null);
  const { id } = useParams();
  const { removeKick } = props;
  

  useEffect(() => {
    const fetchKick = async () => {
      const kick = await getKick(id);
      console.log(kick);
      setKick(kick);
    };
    fetchKick();
  }, []);

  return (
    <>
      {kick && (
        <div className="kick-detail-top-section">
          <KickInfo name={kick.name} image_url={kick.image_url} />
          {kick.opinions.map(opinion =>(
            <>
            <h2>Comments</h2>
            <p>{opinion.title}</p>
            <p>{opinion.description}</p>
            <p>{opinion.score}</p>

            </>
          ))}
          <div>
            <Link to={`/kicks/${id}/edit`}><button>Edit</button></Link>
            <button onClick={() => removeKick(kick.id)}>Delete</button>
          </div>
        </div>
      )}
    </>
  );
};

export default KickDetail;
