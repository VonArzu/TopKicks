import React, { useState, useEffect } from "react";
import { getKick, deleteKick } from "../../Services/kicks";
import { useParams } from "react-router-dom";

import KickInfo from "../../Components/KickInfo/KickInfo";

import "./KickDetail.css";

const KickDetail = () => {
  const [kick, setKick] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchKick = async () => {
      const kick = await getKick(id);
      console.log(kick);
      setKick(kick);
    };
    fetchKick();
  });

  if (kick) {
    return (
      <div className="kick-detail-top-section">
        <KickInfo
          name={kick.name}
          brand={kick.brand}
          color={kick.color}
          year={kick.year}
          price-={kick.price}
        />
        <div>
          <button>Edit</button>
          <button onClick={() => deleteKick(kick._id)}>Delete</button>
        </div>
      </div>
    );
  }
};

export default KickDetail;
