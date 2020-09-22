import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "../screens/Home/Home";
import AllKicks from "../screens/AllKicks/AllKicks";
import Brands from "../screens/Brands/Brands";
import { createKick, updateKick } from "./../Services/kicks";

// import kicks from "../Services/kicks";
import CreateKick from "../screens/CreateKick/CreateKick";
// import EditKick from "../screens/EditKick/EditKick";
import KickDetail from "../screens/KickDetail/KickDetail";
import { getKicks, deleteKick } from "../Services/kicks";
import EditKick from "../screens/EditKick/EditKick";

export default function MainContainer() {
  const [kicks, setKicks] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const fetchKicks = async () => {
      const allKicks = await getKicks();
      setKicks(allKicks);
    };
    fetchKicks();
  }, []);

  const handleCreate = async (kick) => {
    const newKick = await createKick(kick);
    setKicks((prevState) => [...prevState, newKick]);
    history.push("/kicks");
  };
  const removeKick = async (id) => {
    await deleteKick(id);
    setKicks((prevState) => prevState.filter((kick) => kick.id !== id));
    history.push("/kicks");
  };

  const handleEdit = async (id, kick) => {
    const updatedKick = await updateKick(id, kick);
    setKicks((prevState) =>
      prevState.map((kick) => (kick.id === Number(id) ? updatedKick : kick))
    );
    history.push("/kicks");
  };

  return (
    <Switch>
      <Route path="/kicks/:id/edit">
        <EditKick handleEdit={handleEdit}/>
      </Route>
      <Route path="/kicks/:id">
        <KickDetail removeKick={removeKick} />
      </Route>
      <Route path="/kicks">
        <AllKicks kicks={kicks} />
      </Route>
      <Route path="/brands/:type" component={Brands} />
      <Route path="/CreateKick">
        <CreateKick handleCreate={handleCreate} />
      </Route>
      {/* <Route exact path="/kicks/:id/edit" component={EditKick} /> */}
      <Route path="/kicks/:type/:id" component={KickDetail} />
      <Route path="/" component={Home} />
    </Switch>
  );
}
